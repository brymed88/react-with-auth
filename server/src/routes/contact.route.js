import express from 'express';
const router = express.Router();

import contactController from '../controllers/contact.controller.js';

router.post('/contact', contactController.contactForm)

export { router as contactRoute };