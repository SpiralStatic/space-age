angular
    .module('SpaceAgeApp')
    .controller('NewsController', NewsController);

/* News Controller used to manipulate news on the front end and retrieve them from the backend */
function NewsController(News, $stateParams) {
    var self = this;
    self.news = []; // Array of news articles
    self.newsItem = {}; // Single news article
    self.newsCounter = 10; // Counter for number of news articles to retrieve

    self.getNews = function() {
        News.getAll(self.newsCounter)
            .then(function(response) {
                self.news = response.data.response.results; // News articles as array
                self.newsCounter += 10; // Increment news counter to get upon next consecutive request
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    /* Gets a single news article based on the id passed through the $stateParams */
    /* !!! Currently defunct, redirects to site instead !!! */
    // self.getNewsItem = function() {
    //     var id = $stateParams.id;
    //
    //     News.get(id)
    //         .then(function(response) {
    //             //self.newsItem = response.data.news[0];
    //         })
    //         .catch(function(error) {
    //             self.error = error;
    //         });
    // };
}
