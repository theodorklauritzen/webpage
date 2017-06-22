const express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("express works!");
});

module.exports = router;
