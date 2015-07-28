//(function () {

//    var app = angular.module('myApp', []);
//    app.controller('myCtrl', function ($scope) {
//        $scope.firstName = "John";
//        $scope.lastName = "Doe";
//        $scope.myName = "pankaj dhami";
//    });
//}());

(function () {
    var app = angular.module('AngularApp', ['ngProgressLite']);
    app.config(['ngProgressLiteProvider', function (ngProgressLiteProvider) {
        ngProgressLiteProvider.settings.ease = 'ease-in';
    }]);
    app.controller('productsCtrl', function ($scope, $http, ngProgressLite, $timeout) {
        ngProgressLite.start();
        $http.get("http://localhost:25344/api/Products")
        .success(function (response) {
            $scope.products = response;
            ngProgressLite.done();
        });
        $scope.toggle = function () {
            $scope.myVar = !$scope.myVar;
        }
        $scope.postFormData = function () {

            $http.post("http://localhost:25344/api/Products/", { ProductName: $scope.productName, ProductCode: $scope.productName, Price: $scope.productPrice })
            .success(function (data) {
                $scope.products = data;
                ngProgressLite.done();
            });
        }
    });
    var myCtrl = function ($scope, myService, ngProgressLite, $interval, $log, $anchorScroll, $location) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.myName = "pankaj dhami";

        $scope.username = 'angular';
        $scope.repoSortOrder = '-stargazers_count';
        $scope.countdown = 5;
        var countDownInterval = null;
        var startCountDown = function () {
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        var decrementCountdown = function () {

            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };
        var onError = function () {
            $scope.error = 'could not fetch data.';
            ngProgressLite.done();
        };

        var onRepos = function (data) {
            $scope.repos = data;
            ngProgressLite.done();
            $location.hash('userDetails');
            $anchorScroll();
        };
        $scope.search = function (username) {
            $log.info('searching for ' + username);
            ngProgressLite.start();
            myService.getUser(username).then(function (data) {
                $scope.user = data;

                myService.getRepos($scope.user)
                    .then(onRepos, onError);
                ngProgressLite.done();
            }, onError);
            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
        };
        startCountDown();


    };
    app.controller('myCtrl', ['$scope', 'myService', 'ngProgressLite', '$interval', '$log', '$anchorScroll', '$location', myCtrl]);


}());

