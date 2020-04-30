const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('<h1>Hello, My Server!</h1>'));

router.get('/getData', (req, res) => {
    const number = req.query.number;
    if (!number) {
        res.send('<h1>Lack of Parameter</h1>');
    } else {
        const int = parseInt(number);
        if (isNaN(int)) {
            res.send('<h1>Wrong Parameter</h1>');
        } else {
            let sum = 0;
            let htmlString = ''
            for (let i = 1; i <= int; i++){
                sum += i;
                if (i === int) {
                    htmlString += i + ' = ' + sum;
                } else {
                    htmlString += i + ' + '
                }
            }
            res.send(`<h1>${htmlString}</h1>`);
        }
    }
});

module.exports = router;