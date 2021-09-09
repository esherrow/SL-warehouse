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
        },
        username: {
            type: String,
            require: true
        }
    }
)

const Unit = model('Unit', unitSchema);

module.exports = Unit;