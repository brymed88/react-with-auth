const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account.controller');

router.get('/', accountController.get);

router.post('/create', accountController.create)

router.put('/:id', accountController.update)

router.delete('/:id', accountController.remove)

module.exports = router;