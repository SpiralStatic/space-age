angular
    .module('SpaceAgeApp')
    .controller('MapController', MapController);

function MapController(uiGmapGoogleMapApi) {
    var self = this;
    self.ready = false;

    self.createMap = function() {
        uiGmapGoogleMapApi
            .then(function(maps) {
                setTimeout(function() {
                    self.ready = true;
                }, 100);
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
