const { Schema, model } = require('mongoose');

const unitSchema = new Schema(
    {
        number: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            required: true,
            trim: true
        }
    }
)

const Unit = model('Unit', unitSchema);

module.exports = Unit;