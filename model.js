const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('message', schema);