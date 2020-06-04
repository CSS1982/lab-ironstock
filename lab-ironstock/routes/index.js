const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const key = process.env.KEY;
const functionName = 'TIME_SERIES_DAILY';
const symbolName = ['DAX'];
const apiUrls = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName[0]}&apikey=${key}`;
const Value = require('../models/value');


/* GET home page */
router.get('/', (req, res, next) => {
 dataValues(res)
  
});

async function dataValues(res)  {
  try {
    let values = await Value.find();
    let data = await Promise.all(values.map(async value => {
      var apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${value.symbol}&apikey=${key}`;
      let dataResponse = await axios.get(apiUrl)
      return dataResponse.data;
    }))
    console.log(data) ;
    res.render('index', {data});
  } catch (err) {
    console.log(err)
  }
}
module.exports = router;