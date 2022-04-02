const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Collection and Schema
let Dept = new Schema({
    name:{
        type: String
    },
    dept_id:{
        type: String
    },
    location:{
        type: String
    }
});

module.exports = mongoose.model('Dept', Dept)