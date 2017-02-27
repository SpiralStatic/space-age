var express = require('express');
var router = express.Router();

var serveController = require('../controllers/serve.js');

router.route('/')
    .get(serveController.index);

module.exports = router;
