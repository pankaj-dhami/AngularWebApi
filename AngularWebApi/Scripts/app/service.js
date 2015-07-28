(function () {

    var myService = function ($http, ngProgressLite) {

        var getUser = function (username) {
            ngProgressLite.start();
            return $http.get('https://api.github.com/users/' + username)
            .then(function (response) {

                return response.data;
            });
        };

        var getRepos = function (user) {

            return $http.get(user.repos_url)
                  .then(function (response) {
                      ngProgressLite.done();
                      return response.data;
                  });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    var module = angular.module('AngularApp');
    module.factory('myService', myService);

}());