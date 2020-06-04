const mongoose = require('mongoose');

const Value = require('../models/value');

const DB_NAME = 'values-code';

const mongoUrl = `mongodb://localhost/${DB_NAME}`;
const mongoConfig = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(mongoUrl, mongoConfig);

const values = [{
    name: 'Apple',
    symbol: 'AAPL',
    description: 'Bite me!',
},
{
    name: 'Microsoft',
    symbol: 'MSFT',
    description: 'Windows sucks!',
},
{
    name: 'Oracle Corporation',
    symbol: 'ORCL',
    description: 'Oracle is better than MongoDB',
},
{
    name: 'Google',
    symbol: 'GOOGL',
    description: 'Do no evil',
}
];

Value.create(values, err => {
    if (err) {
        throw err;
      }
      console.log(`Created ${values.length} values`);
      mongoose.connection.close();
});