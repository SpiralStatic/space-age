var rpromise = require('request-promise');

/* Gets from the guardian API a set number of aritcles relating to rockets and space */
function indexNews(req, res) {
    /* guardian request options */
    var newsOptions = {
        uri: 'https://content.guardianapis.com/search', //URI
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        qs: {
            'section': 'science', // Articles only in science section
            'q': 'space | rocket', // Relatng to space or rockets
            'page-size': req.query.pages, // Number of articles to get
            'api-key': process.env.GUARDIANAPI, // Guardian API key
            'show-fields': 'thumbnail,trailText' // Get extra fields (thumbnail and trailtext)
        },
        json: true // Automatically parses the JSON string in the response
    };

    rpromise(newsOptions)
        .then(function(response) {
            res.status(200).json(response); // Return articles
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
