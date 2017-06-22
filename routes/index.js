const express = require('express');
var router = express.Router();

router.get("/secret", function(req, res, next) {
  res.send("This is secret, sort of");
});

module.exports = router;
