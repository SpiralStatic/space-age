var express = require('express');
var router = express.Router();

var serveController = require('../controllers/serve.js');
var apiUsersController = require('../controllers/api/users.js');

router.route('/')
    .get(serveController.index);

router.route('/api/users')
    .get(apiUsersController.index)
    .post(apiUsersController.create);

router.route('/api/users/:id')
    .get(apiUsersController.show)
    .delete(apiUsersController.delete);

module.exports = router;
