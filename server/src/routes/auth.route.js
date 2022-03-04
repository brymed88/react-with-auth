const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.get('/', authController.get);

router.post('/', authController.create)

router.put('/:id', authController.update)

router.delete('/:id', authController.remove)

module.exports = router;