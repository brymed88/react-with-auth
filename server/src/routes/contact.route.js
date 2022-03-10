import express from 'express';
const router = express.Router();

import contactController from '../controllers/contact.controller.js';

router.get('/', contactController.get);

router.post('/', contactController.create)

router.put('/:id', contactController.update)

router.delete('/:id', contactController.remove)

export { router as contactRoute };