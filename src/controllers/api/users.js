var User = require('../../models/user.js');

function indexUserFavorites(req, res) {
    User.findOne({ uid: req.params.id }, function(err, user) {
        elseError(req, res, err, user);
        res.status(200).json(user.favorites);
    });
}

function showUser(req, res) {
    User.findOne({ uid: req.params.id }, function(err, user) {
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
        elseError(req, res, err, user);

        res.status(200).json(user);
    });
}

function deleteUser(req, res) {
    User.delete({ uid: req.params.id }, function(err, user) {
        ifNotFound(req, res, err, user);
        elseError(req, res, err, user);

        res.status(200).json({
            message: "Successful deletion"
        });
    });
}

function ifNotFound(req, res, err, user) {
    if (!user) return res.status(404).json({
        message: "User not found"
    });
}

function elseError(req, res, err, user) {
    if (err) return res.status(500).json({
        error: err.message
    });
}

module.exports = {
    index: indexUserFavorites,
    show: showUser,
    create: createUser,
    delete: deleteUser
};
