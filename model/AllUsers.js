const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allusersSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AllUsers', allusersSchema)
