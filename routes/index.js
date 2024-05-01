const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
const feedbackRouter = require('./feedback');
const diagnosticsRouter = require('./diagnostics');

router.use('/tips', tipsRouter);
router.use('/feedback', feedbackRouter);
router.use('/diagnostics', diagnosticsRouter);

module.exports = router;