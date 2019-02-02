var express = require('express');
var router = express.Router();
var sampleData = require("./../db/sample.json");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`lat : ${req.query.lat} long : ${req.query.long}`);
});
router.get('/test', function(req, res, next) {
  res.json(sampleData);
});

module.exports = router;
