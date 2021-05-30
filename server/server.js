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

// PUT

// DELETE

//port listener
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT);
})