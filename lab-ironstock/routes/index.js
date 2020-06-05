const express = require('express');
const router = express.Router();
const Value = require('../models/value');


/* GET home page */
router.get('/', (req, res, next) => {
  Value.find().then(data =>
    res.render('index', {data})
  ).catch(err => console.log("Error!", err));

});


module.exports = router;