const router = require('express').Router();
const path = require('path');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// send user to homepage if there's a pathing issue
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/login.html'))
})

module.exports = router;