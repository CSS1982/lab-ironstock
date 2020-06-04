Value = require('../models/value');

exports.getAllValues = (req, res, next) => {
    Value.find()
        .then(allValues => {
            res.render('values/index', {
                values: allValues
            });
        }).catch(error => {
            next(error);
        });
};

exports.createValue = (req, res, next) => {
    const {
        name,
        symbol,
        description
    } = req.body;
    const newValue = new Value({
        name,
        symbol,
        description
    });
    newValue.save()
        .then((value) => {
            res.redirect('/values');
        })
        .catch((error) => {
            res.redirect('/new');
        });
};

exports.deleteValue = (req, res, next) => {
    Value.findByIdAndRemove(req.params.id)
        .then((value) => {
            res.redirect('/values');
        })
        .catch((error) => {
            next(error);
        });
};