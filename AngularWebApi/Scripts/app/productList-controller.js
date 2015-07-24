//(function () {

//    var app = angular.module('myApp', []);
//    app.controller('myCtrl', function ($scope) {
//        $scope.firstName = "John";
//        $scope.lastName = "Doe";
//        $scope.myName = "pankaj dhami";
//    });
//}());

(function () {

    var app = angular.module('myApp', ['ngProgressLite']);
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
            ngProgressLite.start();
            $http.post("http://localhost:25344/api/Products/", { ProductName: $scope.productName, ProductCode: $scope.productName, Price: $scope.productPrice })
            .success(function (data) {
                $scope.products = data;
                ngProgressLite.done();
            });
        }
    });
    app.controller('myCtrl', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.myName = "pankaj dhami";
    });


}());

