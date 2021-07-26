const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const eventRoutes = require('./event-routes.js');
const searchRoutes = require('./search-routes.js');


router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/search', searchRoutes);
// router.use('/results', resultsRoutes);

module.exports = router;