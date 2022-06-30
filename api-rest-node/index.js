'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3500;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/forum', { useNewUrlParser: true})
        .then(() => {
            console.log('The connection to the Database is correctly done');
            app.listen(port, () => {
                console.log("The server is working")
            })
        })
        .catch(error => console.log(error));