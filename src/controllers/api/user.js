var User = require('../../models/user.js');

function indexUserFavorites(req, res) {
    User.findById(req.user.uid, function(err, user) {
        if (err) return res.status(500).json({
            error: err.message
        });
        res.status(200).json(user.favorites);
    });
}

module.exports = {
    index: indexUserFavorites
};
