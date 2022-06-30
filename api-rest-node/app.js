'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);

module.exports = app;