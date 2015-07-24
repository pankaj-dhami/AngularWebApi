//(function () {

//    var app = angular.module('myApp', []);
//    app.controller('myCtrl', function ($scope) {
//        $scope.firstName = "John";
//        $scope.lastName = "Doe";
//        $scope.myName = "pankaj dhami";
//    });
//}());

(function () {

    var app = angular.module('myApp', []);
    app.controller('productsCtrl', function ($scope, $http) {
        $http.get("http://localhost:25344/api/Products")
        .success(function (response) { $scope.products = response; });
        $scope.toggle = function () {
            $scope.myVar = !$scope.myVar;
        }
        $scope.postFormData = function () {

            $http.put("http://localhost:25344/api/Products/" + $scope.productPrice, { ProductName: $scope.productName, ProductCode: $scope.productName, Price: $scope.productPrice })
            .success(function (data) {
                $scope.products = data;
            });
        }
    });
    app.controller('myCtrl', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.myName = "pankaj dhami";
    });


}());

