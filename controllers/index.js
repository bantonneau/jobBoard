const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./job-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;



