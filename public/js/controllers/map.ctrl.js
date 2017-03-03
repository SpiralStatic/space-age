angular
    .module('SpaceAgeApp')
    .controller('MapController', MapController);

function MapController(uiGmapGoogleMapApi) {
    var self = this;

    self.center = {
        latitude: 45,
        longitude: -73
    };
    self.zoom = 8;

    self.getMap = function() {
        uiGmapGoogleMapApi.then(function(maps) {
            console.log(maps);
            console.log("map");
        });
    };
}
