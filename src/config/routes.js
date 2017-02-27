var express = require('express');
var router = express.Router();

router.route('/')
    .get(locationsController.index);

module.exports = router;
