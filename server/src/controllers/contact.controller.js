import contactService from '../services/contact.service.js';
const contactController = {};

contactController.contactForm = async (req, res) => {
  try {
    res.json(await contactService.contactForm(req.body));
  } catch (err) {
    console.log('Contact form message error', err.message);
    return res.status(400).json({ status: 'Message send failed' });
  }
};

export default contactController;
