var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cat', function(req, res, next) {
  res.render('index', { title: 'Meow' });
});

module.exports = router;
