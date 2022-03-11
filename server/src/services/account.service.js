import AccountModel from '../models/account.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

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
                expiresIn: "2h",
            }
        );

        user.token = token;

        return {
            id: user._id,
            email: user.email,
            accessToken: user.token,
            role: user.role,
        }
    }

    else {
        return { status: "Invalid Credentials" }
    }
}

accountService.create = async (query) => {
    //TODO add validation and additional logic before blindly inserting new user

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
        });

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;

        //TODO add logic to send one time code to email for registration purposes
        return { status: "User Created" }
    }
    catch (e) {
        console.log(e);
        return { status: 'Insert failed' };
    }
}

accountService.update = async (user) => {
    return user;
}

accountService.remove = async (user) => {
    return user
}

export default accountService