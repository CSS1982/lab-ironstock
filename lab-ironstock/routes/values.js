const express = require('express');
const router = express.Router();
const Value = require('../models/value.js');
const values_controller = require('../controllers/value.js');

/* GET values page */
router.get('/', values_controller.getAllValues);

/*POST value*/
router.post('/', values_controller.createValue);

/*GET values add details page*/
router.get('/new', (req, res, next) => {
    res.render('values/new');
});

/*POST delete movie*/
router.post('/delete/:id', values_controller.deleteValue);

module.exports = router;

