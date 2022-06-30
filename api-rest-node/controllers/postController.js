 'use strict'

const validator = require('validator');
const Posts = require('../models/posts');

const controller = {
    save: function(req, res){
        let params = req.body;

        let validate_title = !validator.isEmpty(params.title);
        let validate_content = !validator.isEmpty(params.content);
        let validate_category = !validator.isEmpty(params.category);
        let validate_questions = !validator.isEmpty(params.questions);
        let validate_answers = !validator.isEmpty(params.answers);

        if (validate_title && validate_content && validate_category && validate_questions && validate_answers){
            let post = new Posts();
            post.title = params.title;
            post.content = params.content;
            post.category = params.ategory;
            post.questions = params.questions;

            post.save((err, postStored)=> {
                if(err){
                    return res.status(500).send({
                        message: 'Failure saving the post'
                    });
                }
                if (!postStored){
                    return res.status(400).send({
                        message: 'Failure saving the post'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    post: postStored
                })
            })

        }
    }
};
module.exports = controller;