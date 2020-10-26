//<!--Domingo Novello - 301017413 - October 26, 2020 -->
let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    notes: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Book', bookModel);