var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`lat : ${req.query.lat} long : ${req.query.long}`);
});

module.exports = router;
