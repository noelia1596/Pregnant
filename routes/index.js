var express = require('express');
var router = express.Router();
const path = require('path');

/*Al poner la /, salga nuestro html */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/html.html'));
});

module.exports = router;
