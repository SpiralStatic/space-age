//var Launch = require('../../models/launch.js');
var request = require('request');

function indexLaunches(req, res) {
    console.log("indexLaunches()");
    request('http://www.launchlibrary.net/1.2/launch/next/5', function(error, response, launches) {
        console.log(launches);
        if (error) return res.status(500).json({
            error: error.message
        });
        res.status(200).json(launches);
    });
}

module.exports = {
    index: indexLaunches
};
