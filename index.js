'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const { PORT, HOST } = process.env;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
