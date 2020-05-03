const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('<h1>Hello, My Server!</h1>'));

router.get('/getData', (req, res) => {
    const number = req.query.number;
    if (!number) {
        res.send('Lack of Parameter');
    } else {
        const int = parseInt(number);
        if (isNaN(int) || int <= 0) {
            res.send('Wrong Parameter: N should be Positive Integer.');
        }else {
            let sum = 0;
            let htmlString = '';
            for (let i = 1; i <= int; i++){
                sum += i;
                if (i === int) {
                    htmlString += i + '<br><strong>= ' + sum + '</strong>';
                } else {
                    htmlString += i + ' + ';
                }
            }
            res.send(`${htmlString}`);
        }
    }
});

router.get('/myName', (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.send(`<h1>${username}</h1>`);
    } else {
        res.redirect('/nameform.html');
    }
});

router.get('/trackName', (req, res) => {
    const username = req.query.username;
    if (!username || username ==='') {
        res.redirect('/nameform.html');
    } else {
        res.cookie('username', username);
        res.redirect('/myName');
    }
});

module.exports = router;