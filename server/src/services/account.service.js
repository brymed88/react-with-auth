import AccountModel from '../models/account.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import contactService from './contact.service.js';
import GenerateRandNum from '../utils/GenerateRandNum.helper.js';

const accountService = {};

accountService.get = async (query) => {

    const { email, password } = query;

    // Validate user input
    if (!(email && password)) {
        return { status: 'null' };
    }

    let user = await AccountModel.findOne({ email: email });

    //do some logic to verify the password and jwt token match then return token...
    if (user && (await bcrypt.compareSync(password, user.password) === true)) {

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h",
            }
        );

        user.token = token;
        user.save();

        return {
            accessToken: user.token,
            role: user.role,
        }
    }

    else {
        return { status: "Invalid Credentials" }
    }
}

accountService.create = async (query) => {

    try {
        const { email, password } = query;

        if (!(email && password)) {
            return { status: 'Invalid input' };
        }

        const curUser = await AccountModel.findOne({ email: email });

        if (curUser) {
            return { status: 'Existing user' };
        }

        const user = await AccountModel.create({
            email: email.toLowerCase(),
            password: bcrypt.hashSync(password, 10),
            active: false,
        });

        //Create 6 digit random code and assign to user.authcode in db
        user.authcode = GenerateRandNum(6);
        user.save();

        //Call contactService.sendcode to send email to user
        contactService.sendcode({ email: email, code: user.authcode });

        return { status: "User created" }

    }
    catch (e) {
        console.log(e);
        return { status: 'Insert failed' };
    }
}

accountService.generateCode = async (data) => {

    //de-structure email
    const { email } = data;

    if (email) {

        let user = await AccountModel.findOne({ email: email });

        if (user) {

            //Set account inactive if pass reset workflow -- login will not work if inactive.
            user.active = false;

            //Generate 6 digit auth code
            user.authcode = GenerateRandNum(6);
            user.save();

            //Call contactService.sendcode to send email to user
            contactService.sendcode({ email: email, code: user.authcode });

            return { status: 'success' };
        }
        else {
            return { status: 'invalid user' };
        }
    }
    else {
        return { status: 'invalid user' };
    }
}

accountService.verifyCode = async (query) => {
    try {

        const { email, code } = query;

        //Stringify code variable
        code.toString();

        // Validate user input
        if (!(email && code)) {
            return { status: 'invalid' };
        }

        let user = await AccountModel.findOne({ email: email });

        //Check for valid user, if so set user.code and change status to true
        if (user) {

            if (user.authcode === code) {
                user.active = true;
                user.authcode = '';
                user.save();

                return { status: 'success' };
            }
            return { status: 'invalid' };
        }
        return { status: 'invalid' };

    }
    catch (err) {
        console.log(err);
        return { status: 'failed' };
    }
}

export default accountService