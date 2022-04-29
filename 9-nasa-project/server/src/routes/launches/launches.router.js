const express = require('express');
const {
    httpGetAllLaunches,
    httpAddNewLaunch,
<<<<<<< HEAD
<<<<<<< HEAD
    httpAbortLaunch
=======
>>>>>>> 34e3215 (Fix bug POST /launches)
=======
    httpAbortLaunch
>>>>>>> 193bf41 (Delete Launch)
} = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
<<<<<<< HEAD
<<<<<<< HEAD
launchesRouter.delete('/:id', httpAbortLaunch);
=======
>>>>>>> 34e3215 (Fix bug POST /launches)
=======
launchesRouter.delete('/:id', httpAbortLaunch);
>>>>>>> 193bf41 (Delete Launch)

module.exports = launchesRouter;
