const router = require('express').Router();

const userRoutes = require('./user-routes');
const wordRoutes = require('./word-routes');

router.use('/users', userRoutes);
router.use('/words', wordRoutes);

module.exports = router;