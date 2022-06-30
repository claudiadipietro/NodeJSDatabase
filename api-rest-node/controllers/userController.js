'use strict'

const validator = require('validator');
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

const controller = {
    save: function(req, res){
        let params = req.body;

        let validate_name = !validator.isEmpty(params.name);
        let validate_email = !validator.isEmpty(params.email) && validator.isEmail(params.email);
        let validate_password = !validator.isEmpty(params.password);

        if (validate_name && validate_email && validate_password){
            let user = new User();
            user.name = params.name;
            user.email = params.email.toLowerCase();
            user.role = 'ROLE_USER';
            user.image = null;

            User.findOne({
                email: user.email
            }, (err, issetUser) => {
                if(err){
                    return res.status(500).send({
                        message: 'Failure when checking the duplicity of the user'
                    });
                }
                if (!issetUser){
                    bcrypt.hash(params.password, null, null, (err, hash) => {
                        user.password = hash;

                    user.save((err, userStored)=> {
                        if(err){
                            return res.status(500).send({
                                message: 'Failure when saving the user'
                            });
                        }
                        if (!userStored){
                            return res.status(400).send({
                                message: 'Failure when saving the user'
                            });
                        }

                        return res.status(200).send({
                            status: 'success',
                            user: userStored
                        })
                    })
                })
                }else{
                    return res.status(500).send({
                        message: 'The user is registered already'
                    });
                }
            });


        }else{
            return res.status(400).send({
                message: 'The validation failed. Please try again'
            })
        } 
    }
};
module.exports = controller;