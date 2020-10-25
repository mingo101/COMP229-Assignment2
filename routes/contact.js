let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to Contact Model
let Contact = require('../models/contact');

//Get route for contact list page
router.get('/', (req, res, next) =>{
    Contact.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(ContactList);

           res.render('contact', {title:'Contact List', ContactList: contactList});
        }
    });
});

module.exports = router;