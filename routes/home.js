var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req, res) {
  res.render('index');
});
// define the about route
router.get('/forgot', function (req, res) {
  res.render('forgot');
});
// define the about route
router.get('/register', function (req, res) {
  res.render('register');
});

module.exports = router;