'use strict'

const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/newPost', postController.save);

module.exports = router;