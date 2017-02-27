var User = require('../../models/user.js');

function indexUserFavorites(req, res) {
    User.findById(req.user.uid, function(err, user) {
        ifNotFound();
        elseError();
        res.status(200).json(user.favorites);
    });
}

function showUser(req, res) {
    User.findById(req.user.uid, function(err, user) {
        ifNotFound();
        elseError();

        res.status(200).json(user);
    });
}

function createUser(req, res) {
    User.create(req.body, function(err, user) {
        ifNotFound();
        elseError();

        res.status(204).json(user);
    });
}

function deleteUser(req, res) {
    User.delete(req.user.uid, function(err, user) {
        ifNotFound();
        elseError();

        res.status(204).json({
            message: "Successful deletion"
        });
    });
}

function ifNotFound(user) {
    if (!user) return res.status(404).json({
        error: err.message,
        message: "User not found"
    });
}

function elseError(user) {
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
