angular
    .module('SpaceAgeApp')
    .controller('NewsController', NewsController);

function NewsController(News, $stateParams) {
    var self = this;
    self.news = [];
    self.newsItem = {};

    self.getNews = function() {
        News.getAll()
            .then(function(response) {
                console.log(response);
                self.news = response.data.response.results;
                console.log(self.news);
            })
            .catch(function(error) {
                self.error = error;
            });
    };

    self.getNewsItem = function() {
        var id = $stateParams.id;

        News.get(id)
            .then(function(response) {
                //self.newsItem = response.data.news[0];
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
