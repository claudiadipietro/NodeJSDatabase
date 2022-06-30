'use strict'

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.save);

module.exports = router;