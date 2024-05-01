const router = require('express').Router();
// const path = require('path');

router.get('/notes', (req, res) => 

  res.sendFile(path.joint(__dirname, '/public/notes.html')));

  module.exports = router;