//Import express and Create Application
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
const body_parser = require('body-parser');

//Import Mongoose
const mongoose = require('mongoose')
const db_config = require('./mongo')

const student_route = require('./student-controller');

//Connect to MongoDB
mongoose.connect(db_config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('DB Connection Created');
    },
    error => {
        console.log('Error connecting to database : ' + error);
    }
);

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));
app.use(cors());


//Index Page of the Backend
app.get('/', (req, res) => {
    res.send('Server is Running');
});

app.use('/student', student_route);
app.use('/dept', dept_router);

//Set Port to Listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
