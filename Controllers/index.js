const router = require('express').Router();

const jobRoutes = require('./job-routes');

router.use('/', jobRoutes);

module.exports = router;