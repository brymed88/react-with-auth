import express from 'express';
const router = express.Router();
import auth from "../middleware/auth.js";
import accountController from '../controllers/account.controller.js';

router.get('/login', accountController.get);

router.post('/create', accountController.create)

router.put('/:id', auth, accountController.update)

router.delete('/:id',auth, accountController.remove)

export {router as accountRoute};