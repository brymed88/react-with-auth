import contactService from '../services/contact.service.js';

const contactController = {};

contactController.contactForm = async (req, res, next) => {
    try {
        res.json(await contactService.contactForm(req.body));
    }
    catch (err) {
        console.error('Error while getting user information', err.message);
        next(err);
    }
}

export default contactController;
