const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controller');

router.get('/', contactController.get);

router.post('/', contactController.create)

router.put('/:id', contactController.update)

router.delete('/:id', contactController.remove)

module.exports = router;