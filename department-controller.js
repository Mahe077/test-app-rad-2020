const express = require('express');
const app = express();
const dept_router = express.Router();

let Dept = require('./department-model');

// add data to the collection
dept_router.route('/add').post((req, res, next) => {
    console.log(req.body);
    Dept.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});


dept_router.route('/').get((req, res) => {
    Dept.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});


module.exports = dept_router;
