angular.module('starter.controllers', [])

        .controller('MapCtrl', function ($scope, $ionicLoading, $compile) {

            var styles = [{ stylers: [{ saturation: -90 }] }, { featureType: "transit", elementType: "all", stylers: [{ lightness: 100 }, { visibility: "off" }] }, { featureType: "poi", elementType: "all", stylers: [{ lightness: 100 }, { visibility: "off" }] }];

            function initialize() {
                var myLatlng = new google.maps.LatLng(-30.16219500000000000, -51.18286000000000000);

                var mapOptions = {
                    center: myLatlng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
                var map = new google.maps.Map(document.getElementById("gmap"),
                    mapOptions);
                map.mapTypes.set('map_style', styledMap);
                map.setMapTypeId('map_style');

                //Marker + infowindow + angularjs compiled ng-click
                var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
                var compiled = $compile(contentString)($scope);

                var infowindow = new google.maps.InfoWindow({
                    content: compiled[0]
                });

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Uluru (Ayers Rock)'
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });

                $scope.map = map;
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
