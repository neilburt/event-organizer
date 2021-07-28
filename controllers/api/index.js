const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const eventRoutes = require('./event-routes.js');
const searchRoutes = require('./search-routes.js');
const resultRoutes = require('./result-routes.js');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/search', searchRoutes);
router.use('/results', resultRoutes);

module.exports = router;