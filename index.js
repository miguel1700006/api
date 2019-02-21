'use strict';

const express = require('express');
const router = express.Router();


const route = router.get('/customers', function (req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    Customer.find({}).lean().exec(function(e,docs){
       res.json(docs);
       res.end();
    });
});
