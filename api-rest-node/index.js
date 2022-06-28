'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/forum', { useNewUrlParser: true})
        .then(() => {
            console.log('The connection to the Database is correctly done');
        })
        .catch(error => console.log(error));