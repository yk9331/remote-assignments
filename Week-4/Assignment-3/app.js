const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//MySQL Connection Config
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

async function ckeckEmailValidation(email) {
    let sql = `SELECT email FROM user WHERE email = "${email}";`;
    let query = await db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result.length);
        if (result.length == 0) {
            return true;
        } else {
            return false;
        }
    });
} 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.redirect('/index.html');
});

app.post('/signup', (req, res) => {
    if (ckeckEmailValidation(req.body.email)) {
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        console.log(user);
        let sql = `INSERT INTO user SET ?`;
        let query = db.query(sql, user, (err, result) => {
            if (err) throw err;
            res.redirect('member.html');
        });
    } else {
        console.log(req.body.email);
        res.send('This email already exist, try to log in');
    }
})

app.post('/signin', (req, res) => {
    res.send('sign in');
})

app.listen(port, () => console.log("The application is running on localhost:3000"));