angular.module('starter.controllers', [])

        .controller('MapCtrl', function ($scope, $ionicLoading, $compile, $location) {

            var styles = [{stylers: [{saturation: -90}]}, {featureType: "transit", elementType: "all", stylers: [{lightness: 100}, {visibility: "off"}]}, {featureType: "poi", elementType: "all", stylers: [{lightness: 100}, {visibility: "off"}]}];

            var locations = [
                ['3719', -29.97877700000000000, -51.19641500000000000],
                ['5939', -29.97877300000000000, -51.18900100000000000],
                ['3983', -29.97877700000000000, -51.17880000000000000],
                ['268', -30.16219500000000000, -51.18286000000000000],
            ];

            function initialize() {

                var mapOptions = {
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true
                };

                styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
                map = new google.maps.Map(document.getElementById("gmap"),
                    mapOptions);

                //Marker + infowindow + angularjs compiled ng-click
                var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
                var compiled = $compile(contentString)($scope);

                var infowindow = new google.maps.InfoWindow({
                    content: compiled[0]
                });

                $scope.map = map;
                carregaParadas();
            }

            function carregaParadas() {

                var options = {enableHighAccuracy: true};
                navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

                // onSuccess Geolocation
                //
                function onSuccess(position) {

                    // alert('Get location...');
                    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

                    map.mapTypes.set('map_style', styledMap);
                    map.setMapTypeId('map_style');
                    

                    new google.maps.Marker({
                        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        map: $scope.map,
                        icon: 'img/current_location.png',
                        title: 'Bus Stop'
                    });

                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: $scope.map,
                        icon: 'https://raw.githubusercontent.com/hmschreiner/EasyBus/master/api/images/buspoint-orange.png',
                        title: 'Bus Stop'
                    });

                    google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                            window.location = '#/tab/busStop/' + locations[i][1] + ',' + locations[i][2];
                            /*window.location =  'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=268&t=o';*/
                        }
                    })(marker, i));
                }
                }

                function onError(error) {
                    alert('code: ' + error.code + '\n' +
                            'message: ' + error.message + '\n');
                }



            }

            google.maps.event.addDomListener(window, 'load', initialize);

            $scope.centerOnMe = function () {
                if (!$scope.map) {
                    return;
                }

                $scope.loading = $ionicLoading.show({
                    content: 'Getting current location...',
                    showBackdrop: false
                });

                navigator.geolocation.getCurrentPosition(function (pos) {
                    $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                    $scope.loading.hide();
                }, function (error) {
                    alert('Unable to get location: ' + error.message);
                });
            };

            $scope.clickTest = function () {
                alert('Example of infowindow with ng-click')
            };
            initialize();
        })

        .controller('BusStopDetailCtrl', function ($scope, $stateParams, Onibus) {
            Onibus.get($stateParams.lat, $stateParams.lon).success(function (data) {
                $scope.onibus = data;
            });
            ;
            $scope.remove = function () {
            };
        })

        .controller('DashCtrl', function ($scope) {
        })

        .controller('ChatsCtrl', function ($scope, Chats) {
            $scope.chats = Chats.all();
            $scope.remove = function (chat) {
                Chats.remove(chat);
            }
        })

        .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
            $scope.chat = Chats.get($stateParams.chatId);
        })

        .controller('AccountCtrl', function ($scope) {
            $scope.settings = {
                enableFriends: true
            };
        });
