angular
    .module('SpaceAgeApp')
    .controller('MapController', MapController);

/* Small controller to simply create the google map 'after' the software has finished loading */
function MapController(uiGmapGoogleMapApi) {
    var self = this;
    self.ready = false; // Display map boolean

    /* Creates the google map on launch show state */
    self.createMap = function() {
        uiGmapGoogleMapApi
            .then(function(maps) {
                setTimeout(function() { // Wait to ensure map is ready for data
                    self.ready = true; // Now display map
                }, 100);
            })
            .catch(function(error) {
                self.error = error;
            });
    };
}
