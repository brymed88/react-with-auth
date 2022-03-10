import accountService from '../services/account.service.js';

const accountController = {};
accountController.get = async (req, res, next) => {
    try {
        res.json(await accountService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

accountController.create = async (req, res, next) => {
    try {
        console.log(req.body)
        res.json(await accountService.create(req.body));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
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