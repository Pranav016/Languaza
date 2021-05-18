const express = require('express');
const translateController = require('../controllers/translate');

const router = express.Router();

router.get('/', translateController.translate);

module.exports = router;
