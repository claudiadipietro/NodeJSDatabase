'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postsSchema = Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    category: String,
    questions: String,
    answers: Array
});

module.exports = mongoose.model('Posts', postsSchema);