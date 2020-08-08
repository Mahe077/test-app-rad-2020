const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Collection and Schema
let Student = new Schema({
    name: {
        type: String
    },
    reg_no: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('Student', Student);
