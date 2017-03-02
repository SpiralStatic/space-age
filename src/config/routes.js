var express = require('express');
var router = express.Router();

var serveController = require('../controllers/serve.js');
var apiUsersController = require('../controllers/api/users.js');
var apiLaunchesController = require('../controllers/api/launches.js');

router.route('/')
    .get(serveController.index);

router.route('/api/users')
    .get(apiUsersController.index)
    .post(apiUsersController.create);

router.route('/api/users/:id')
    .get(apiUsersController.show)
    .delete(apiUsersController.delete);

router.route('/api/launches')
    .get(apiLaunchesController.index);

router.route('/api/launches/:id')
    .get(apiLaunchesController.show);

module.exports = router;
