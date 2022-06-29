'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = Schema({
    content: String,
    date: {type: Date, default: Date.now},
    user: {type: Schema.ObjectId, ref: 'User'}
});

var comment = mongoose.model('Comment', commentSchema);

var topicSchema = Schema({
    title: String,
    content: String,
    code: String,
    lang: String,
    date: {type: Date, default: Date.now},
    user: {type: Schema.ObjectId, ref: 'User'},
    comments: [commentSchema]
});

module.exports = mongoose.model('Topic', topicSchema);