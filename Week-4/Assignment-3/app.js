const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'assignment'
});

db.connect((err) => {
    if (err) { throw err; }
    console.log("MySQL Connected.");
})

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Get Root');
});

app.listen(port, () => console.log("The application is running on localhost:3000"));