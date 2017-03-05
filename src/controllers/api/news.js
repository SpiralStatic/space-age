var rpromise = require('request-promise');

function indexNews(req, res) {
    var newsOptions = {
        uri: 'https://content.guardianapis.com/search',
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        qs: {
            'section': 'science',
            'api-key': process.env.GUARDIANAPI
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(newsOptions)
        .then(function(response) {
            console.log(response);
            res.status(200).json(response);
        })
        .catch(function(error) {
            return res.status(500).json({
                error: error.message
            });
        });
}

function showNewsItem(req, res) {

}

module.exports = {
    index: indexNews,
    show: showNewsItem
};
