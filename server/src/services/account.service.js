import AccountModel from '../models/account.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import contactService from './contact.service.js';

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

        const curUser = await AccountModel.findOne({ email });

        if (curUser) {
            return { status: 'Existing user' };
        }

        const user = await AccountModel.create({
            email: email.toLowerCase(),
            password: bcrypt.hashSync(password, 10),
            active: false,
        });

        //Create 6 digit random code and assign to user.authcode in db
        let authcode = Math.floor(100000 + Math.random() * 900000);
        user.authcode = authcode;

        //Call contactService.sendcode to send email to user
        const mail = await contactService.sendcode({ email: email, code: authcode });

        return { status: "User created" }

    }
    catch (e) {
        console.log(e);
        return { status: 'Insert failed' };
    }
}

accountService.update = async (user) => {
    return user;
}

/*Remove user from database
accountService.remove = async (user) => {
    return user
}
*/

accountService.codeverify = async (query) => {
    try {

    }
    catch (err) {
        console.log(err);
        return { status: 'Verify code failed' };
    }
}

export default accountService