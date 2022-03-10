import express from 'express';
const router = express.Router();

import authController from '../controllers/auth.controller.js';

router.get('/', authController.get);

router.post('/', authController.create)

router.put('/:id', authController.update)

router.delete('/:id', authController.remove)

export {router as authRoute};