// models/value.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const valueSchema = new Schema(
    {
        name: String,
        symbol: String,
        description: String,
    },
    {
        timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
        }
      }
);

const Value = mongoose.model('Value', valueSchema);

module.exports = Value;
