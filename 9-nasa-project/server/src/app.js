const express = require('express');
const app = express();
const planetsRouter = require('./routes/planets/planets.router');

app.use(express.json());

module.exports = app;
