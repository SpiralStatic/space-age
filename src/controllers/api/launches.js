//var Launch = require('../../models/launch.js');
var request = require('request');

function indexLaunches(req, res) {

    var request_options = {
        headers: {'user-agent': 'Mozilla/5.0'}
    };

    request('http://www.launchlibrary.net/1.2/launch/next/5', request_options,  function(error, response, launches) {
        if (error) return res.status(500).json({
            error: error.message
        });
        res.status(200).json(launches);
    });
}

module.exports = {
    index: indexLaunches
};
