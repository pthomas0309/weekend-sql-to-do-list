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

// GET

// POST

// PUT

// DELETE

//port listener
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT);
})