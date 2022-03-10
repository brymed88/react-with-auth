import authService from '../services/auth.service.js';

const authController = {};

authController.get = async (req, res, next) => {
    try {
        res.json(await authService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

authController.create = async (req, res, next) => {
    try {
        res.json(await authService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

authController.update = async (req, res, next) => {
    try {
        res.json(await authService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

authController.remove = async (req, res, next) => {
    try {
        res.json(await authService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}
export default authController;
