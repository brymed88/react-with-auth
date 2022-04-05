import accountService from '../services/account.service.js';

const accountController = {};

accountController.get = async (req, res, next) => {
    try {
        res.json(await accountService.get(req.body));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

accountController.create = async (req, res, next) => {
    try {
        res.json(await accountService.create(req.body));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

accountController.generateCode = async (req, res, next) => {

    if (req.body) {
        return res.json(await accountService.generateCode(req.body));
    }
    else {
        return res.json({ status: 'invalid' });
    }
}

accountController.verifyToken = (req, res, next) => {
    try {
        if (req.body.token) {
            return res.json({ status: "Valid Token" });
        }
    }
    catch (err) {
        next(err)
    }
}

accountController.verifyCode = async (req, res, next) => {
    try {
        if (req.body) {
            return res.json(await accountService.verifyCode(req.body));
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ status: 'verify code error' });
    }
}

accountController.passReset = async (req, res, next) => {
    try {
        if (req.body) {
            return res.status(200).json(await accountService.passReset(req.body));
        }
    }
    catch (err) {
        console.error(err);
        return res.status(400).json({ status: 'pass reset error' });
    }
}

accountController.update = async (req, res, next) => {
    try {
        res.json(await accountService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

accountController.remove = async (req, res, next) => {
    try {
        res.json(await accountService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}
export default accountController