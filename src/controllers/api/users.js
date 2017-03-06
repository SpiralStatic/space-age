var User = require('../../models/user.js');
var Launch = require('../../models/launch.js');

function showUser(req, res) {
    User.findOne({
        uid: req.params.id
    }, function(err, user) {
        if (!user) return res.status(404).json({
            message: "User not found"
        });
        if (err) return res.status(500).json({
            error: err.message
        });

        res.status(200).json(user);
    });
}

function createUser(req, res) {
    User.create(req.body, function(err, user) {
        if (err) return res.status(500).json({
            error: err.message
        });

        res.status(200).json(user);
    });
}

function updateUser(req, res) {
    User.findOne({ uid: req.params.id }, function(err, user) {
        if (err) return res.status(500).json({
            error: err.message
        });

        var newLaunch = new Launch(req.body.favorites);

        newLaunch.save(function (err, savedLaunch) {
            if(err && err.name === 'MongoError' && err.code === 11000) {
                Launch.findOne({ launchId: req.body.favorites.launchId }, function(err, dbLaunch) {
                    console.log("error");
                    user.favorites.push(dbLaunch._id);
                    return res.status(200).json(user);
                });
            } else if (err) {
                return res.status(500).json({
                    error: err.message
                });
            } else {
                user.favorites.push(savedLaunch._id);

                user.save(function (err) {
                    if (err) return res.status(500).json({
                        error: err.message
                    });

                    res.status(200).json(user);
                });
            }
        });
    });
}

function deleteUser(req, res) {
    User.delete({
        uid: req.params.id
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
