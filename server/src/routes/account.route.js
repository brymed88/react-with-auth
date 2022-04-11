import express from 'express';
const router = express.Router();
import auth from "../middleware/auth.js";
import accountController from '../controllers/account.controller.js';
import userExists from '../middleware/userExists.js';

router.post('/login', accountController.get);

router.post('/create', userExists, accountController.create)

router.post('/verify', auth, accountController.verifyToken);

router.post('/verifycode', accountController.verifyCode);

router.post('/generateCode', accountController.generateCode);

router.post('/passReset', accountController.passReset);

export { router as accountRoute };