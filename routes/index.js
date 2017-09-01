var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});
router.get('/petrol', function(req, res, next) {
  res.render('petrol');
});
router.get('/phosphate', function(req, res, next) {
  res.render('phosphate');
});
module.exports = router;
