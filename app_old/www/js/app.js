var EasyBus = {
    setting: {
        options: {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true}
    },
    // Application Constructor
    initialize: function () {

        alert('loaded');
        this.getLocation();
    },
    getLocation: function () {
        var options = {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
        navigator.geolocation.watchPosition(this.onSuccess, this.onError, this.setting.options);
    },
    onSuccess: function (position) {

        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                'Longitude: ' + position.coords.longitude + '<br />' +
                'Altitude: ' + position.coords.altitude + '<br />' +
                'Accuracy: ' + position.coords.accuracy + '<br />' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                'Heading: ' + position.coords.heading + '<br />' +
                'Speed: ' + position.coords.speed + '<br />' +
                'Timestamp: ' + position.timestamp + '<br />';
    },
    // onError Callback receives a PositionError object
    //
    onError: function (error) {
        alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
    }
};