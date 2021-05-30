//get express
const express = require('express');
//get body parser
const bodyParser = require('body-parser');
//run on port 5000
const PORT = 5000;
//make server
const app = express();
//serve static files
app.use(express.static('server/public'));
//allows body parser to find POST data
app.use(bodyParser.urlencoded({extended: true}));

const pool = require('./modules/pool');

// GET
app.get('/tasks', (req, res) => {
    // SQL to select table data and display it in order of priority
    let queryText = 'SELECT * FROM tasks ORDER BY "priority" DESC;'
    pool.query(queryText).then(result => {
        //send data to client
        res.send(result.rows);
    }).catch(err => {
        console.log('error getting tasks', err);
        res.sendStatus(500);
    });
});
// POST
app.post('/tasks', (req, res) => {
    // variable newTask should be an object that follows our data model 
    let newTask = req.body;
    // SQL insert new table row
    let queryText = `INSERT INTO tasks ("list_item", "priority", "completed")
    VALUES ($1, $2, $3);`;
    // don't forget to sanitize your data (and your hands)
    pool.query(queryText, [newTask.list_item, newTask.priority, newTask.completed])
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log('Server error while adding book', err);
        res.sendStatus(500);
    });
});

// PUT

// DELETE

//port listener
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT);
})