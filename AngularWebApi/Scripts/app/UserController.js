(function () {


    var myCtrl = function ($scope, myService, $routeParams) {
     
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
       
        var onError = function () {
            $scope.error = 'could not fetch data.';
           
        };

        var onUserComplete = function (data) {
            $scope.user = data;
            myService.getRepos($scope.user)
                .then(onRepos, onError);

        };

        var onRepos = function (data) {
            $scope.repos = data;
           
            //$location.hash('userDetails');
            //$anchorScroll();
        };
        myService.getUser($scope.username).then(onUserComplete, onerror);

    };
    var app = angular.module('AngularApp')
    app.controller('UserController', ['$scope', 'myService', '$routeParams', myCtrl]);


}());
