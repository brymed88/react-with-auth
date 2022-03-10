import contactService from '../services/contact.service.js';

const contactController = {};

contactController.get = async (req, res, next) => {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

contactController.create = async (req, res, next) => {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

contactController.update = async (req, res, next) => {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

contactController.remove = async (req, res, next) => {
    try {
        res.json(await contactService.get(req.query));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}
export default contactController;
