var User = require('../../models/user.js');
var Launch = require('../../models/launch.js');

/* Gets user from database and returns it */
function showUser(req, res) {
    User.findOne({
        uid: req.params.id // Find using firebase uid
    }).populate('favorites').exec(function(err, user) { // Get favorites from launch key
        if (!user) return res.status(404).json({
            message: "User not found"
        });
        if (err) return res.status(500).json({
            error: err.message
        });

        res.status(200).json(user); // Return user
    });
}

/* Creates a user in the database */
function createUser(req, res) {
    User.create(req.body, function(err, user) { // Create new user
        if (err) return res.status(500).json({
            error: err.message
        });

        res.status(200).json(user); // Return user
    });
}

/* Updates a user in the database */
function updateUser(req, res) {
    User.findOne({ uid: req.params.id }, function(err, user) { // Find user with firebase uid
        if (err) return res.status(500).json({
            error: err.message
        });

        var newLaunch = new Launch(req.body.favorites); // Create new launch

        newLaunch.save(function (err, savedLaunch) { // Try to save it to database
            /* If there is a duplicate, use original instead */
            if(err && err.name === 'MongoError' && err.code === 11000) {
                Launch.findOne({ launchId: req.body.favorites.launchId }, function(err, dbLaunch) {
                    user.favorites.push(dbLaunch._id); // Add launch to users favorites
                    return res.status(200).json(user); // Return user
                });
            } else if (err) {
                return res.status(500).json({
                    error: err.message
                });
            } else {
                user.favorites.push(savedLaunch._id); // Add launch to users favorites

                user.save(function (err) {
                    if (err) return res.status(500).json({
                        error: err.message
                    });

                    res.status(200).json(user); // Return user
                });
            }
        });
    });
}

/* Deletes an existing user */
function deleteUser(req, res) {
    User.delete({
        uid: req.params.id // Find user with firebase uid
    }, function(err, user) {
        if (!user) return res.status(404).json({
            message: "User not found"
        });
        if (err) return res.status(500).json({
            error: err.message
        });

        res.status(200).json({
            message: "Successful deletion"
        });
    });
}

module.exports = {
    show: showUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser
};
