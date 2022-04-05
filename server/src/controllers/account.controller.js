import accountService from '../services/account.service.js';

const accountController = {};

accountController.get = async (req, res) => {

    try {
        res.json(await accountService.get(req.body));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        return res.status(400).json({ status: 'User login failed' });
    }

}

accountController.create = async (req, res) => {

    try {
        res.json(await accountService.create(req.body));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        return res.status(400).json({ status: 'Account creation failed' });
    }

}

accountController.generateCode = async (req, res) => {

    try {
        return res.json(await accountService.generateCode(req.body));
    }
    catch (err) {
        console.error('Error while generating code', err.message);
        return res.status(400).json({ status: 'invalid' });
    }

}

accountController.verifyToken = (req, res) => {

    try {

        if (req.body.token) {
            return res.status(200).json({ status: "Valid Token" });
        }
        return res.status(400).json({ status: 'invalid' });

    }
    catch (err) {
        console.error('Error while verifying token', err.message);
        return res.status(400).json({ status: 'invalid' });
    }

}

accountController.verifyCode = async (req, res) => {

    try {
        return res.json(await accountService.verifyCode(req.body));
    }
    catch (err) {
        console.error('Error while verifying code', err.message);
        return res.status(400).json({ status: 'invalid' });
    }

}

accountController.passReset = async (req, res) => {

    try {
        return res.status(200).json(await accountService.passReset(req.body));
    }
    catch (err) {
        console.error('Error while resetting password', err.message);
        return res.status(400).json({ status: 'invalid' });
    }

}

accountController.update = async (req, res) => {

    try {
        res.status(200).json(await accountService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        return res.status(400).json({ status: 'invalid' });
    }

}


export default accountController