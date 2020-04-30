const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('<h1>Hello, My Server!</h1>'));

router.get('/getData', (req, res) => {
    const number = req.query.number;
    if (!number) {
        res.send('Lack of Parameter');
    } else {
        const int = parseInt(number);
        if (isNaN(int)) {
            res.send('Wrong Parameter');
        } else {
            let sum = 0;
            let htmlString = ''
            for (let i = 1; i <= int; i++){
                sum += i;
                if (i === int) {
                    htmlString += i + '<br><strong>= ' + sum + '</strong>';
                } else {
                    htmlString += i + ' + '
                }
            }
            res.send(`${htmlString}`);
        }
    }
});

module.exports = router;