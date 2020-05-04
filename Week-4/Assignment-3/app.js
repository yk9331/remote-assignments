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
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('Get Root');
});

app.post('/signup', (req, res) => {
    res.send('sign up');
})

app.post('/signin', (req, res) => {
    res.send('sign in');
})

app.listen(port, () => console.log("The application is running on localhost:3000"));