var express = require('express');
var router = express.Router();

/* Include controller */
var serveController = require('../controllers/serve.js');
var apiUsersController = require('../controllers/api/users.js');
var apiLaunchesController = require('../controllers/api/launches.js');
var apiNewsController = require('../controllers/api/news.js');

/* Route traffic to appropriate controller */
router.route('/')
    .get(serveController.index); // Gets home root page

router.route('/api/users')
    .post(apiUsersController.create); // Create user

router.route('/api/users/:id')
    .get(apiUsersController.show) // Gets user (favorites)
    .patch(apiUsersController.update) // Update user
    .delete(apiUsersController.delete); // Delete user

router.route('/api/launches')
    .get(apiLaunchesController.index); // Gets a number of launches

router.route('/api/launches/:id')
    .get(apiLaunchesController.show); // Gets a single launch

router.route('/api/news')
    .get(apiNewsController.index); // Gets a number of news articles

router.route('/api/news/:id')
    .get(apiNewsController.show); // Gets a single news article

module.exports = router;
