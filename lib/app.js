const express = require('express');

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/cats', require('./controllers/cats'));

module.exports = app;
