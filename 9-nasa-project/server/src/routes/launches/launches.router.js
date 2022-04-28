const express = require('express');
const {
    httpGetAllLaunches,
    httpAddNewLaunches,
} = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunches);

module.exports = launchesRouter;
