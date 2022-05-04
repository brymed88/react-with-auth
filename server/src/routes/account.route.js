import express from 'express';
const router = express.Router();
import accountController from '../controllers/account.controller.js';
import userExists from '../middleware/userExists.js';
import verifyToken from '../middleware/auth.js';

router.post('/login', accountController.login);

router.post('/create', userExists, accountController.create);

router.post('/verify', verifyToken, accountController.verifyToken);

router.post('/verifycode', accountController.verifyCode);

router.post('/generateCode', accountController.generateCode);

router.post('/passReset', accountController.passReset);

export { router as accountRoute };
