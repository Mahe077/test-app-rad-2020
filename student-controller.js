const express = require('express');
const app = express();
const student_router = express.Router();

let Student = require('./student-model');


student_router.route('/add').post((req, res, next) => {
    console.log(req.body);
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});


student_router.route('/').get((req, res) => {
    Student.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});


module.exports = student_router;
