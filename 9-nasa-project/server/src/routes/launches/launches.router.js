const express = require('express');
const {
    httpGetAllLaunches,
    httpAddNewLaunch,
<<<<<<< HEAD
    httpAbortLaunch
=======
>>>>>>> 34e3215 (Fix bug POST /launches)
} = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
<<<<<<< HEAD
launchesRouter.delete('/:id', httpAbortLaunch);
=======
>>>>>>> 34e3215 (Fix bug POST /launches)

module.exports = launchesRouter;
