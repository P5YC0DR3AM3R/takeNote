const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const apiRouter = require('./api')

router.use('/notes', apiRouter);

module.exports = router;