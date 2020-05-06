const express = require('express');
const router = express.Router();
const mysql = require('mysql');

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

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/signin', (req, res) => {
    res.render('signin')
})

router.post('/signup', async (req, res, next) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    let sql = `INSERT INTO user SET ?`;
    let query = db.query(sql, user, (err, result) => {
        if (err) {
            if (err.code == 'ER_DUP_ENTRY') {
                const message = `"${req.body.email}" already exist, please try to sign in.`
                res.render('signin', { message });
            } else {
                next(err);
            }
        }else {
            const username = req.body.username
            res.render('member', { username });
        }
    });
})

function checkEmailValidation(email) {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM user WHERE email = "${email}"`;
        let query = db.query(sql, (err, result) => {
            if (result.length == 1) {
                resolve(true);
            } else {
                reject(false)
            }
        });
    });
}

router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (await checkEmailValidation(email)) {
        let sql = `SELECT * FROM user WHERE email = "${email}" AND password = "${password}"`;
        let query = db.query(sql, (err, result) => {
            if (result.length == 1) {
                const username = result[0].username;
                res.render('member', { username });
            } else {
                const message = 'Wrong Password, please try again'
                res.render('signin', { message });
            }
        })
    } else {
        const message = `"${req.body.email}" not exist, please try to sign up.`
        res.render('signup', { message });
    }
})

module.exports = router; 