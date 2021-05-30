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
    let queryText = 'SELECT * FROM tasks ORDER BY "priority" DESC;';
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
//update a task to mark it completed
app.put('/tasks/:id', (req,res) => {
    // params mark the id of the task to be updated
    const taskId = req.params.id;
    // body id the content to be updated
    const completeStatus = req.body.completed;
    // empty queryString allows us to 
    //change the value based on info we get from client
    queryString = '';
    // conditional checks if req.body.completed is true or false
    if (completeStatus === 'true'){
        queryString = `UPDATE tasks SET "completed" = 'true' WHERE tasks.id = $1;`;
    } else if (completeStatus === 'false'){
        queryString = `UPDATE tasks SET "completed" = 'false' WHERE tasks.id = $1;`;
    } else {
        // prevents users from circumventing completed being a boolean
        res.sendStatus(500);
        return;
    };
    // pool.query runs the update through the DB
    pool.query(queryString, [taskId])
    .then(response => {
        // shows us how many rows have been updated (should be 1)
        console.log(response.rowCount);
        res.sendStatus(202);
    }).catch(err => {
        console.log('Server error in update', err);
        res.sendStatus(500);
    });
});

// DELETE
app.delete('/tasks/:id', (req, res) => {
    // this will delete a targeted task by its id
    // the request will have the parameter to target the id
    const taskToDelete = req.params.id;
    const queryString = `DELETE FROM tasks WHERE tasks.id = $1;`;
    pool.query(queryString, [taskToDelete])
    .then(response => {
        console.log(`Deleted task at ${taskToDelete}`);
        // send client the ok once task is deleted
        res.sendStatus(200);
    }).catch(err => {
        console.log('Server could not process delete', err);
        res.sendStatus(500);
    });
});

//port listener
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT);
});