const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.static('public'));

const mainRoutes = require('./routes');
app.use(mainRoutes);

app.listen(port, () => console.log('The applicaiton is running on localhost:3000'));