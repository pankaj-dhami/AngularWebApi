/// <reference path="../../Views/Home/Main.html" />
/// <reference path="../../app/View/Main.html" />
/// <reference path="../../app/View/UserDetails.html" />
(function () {

    var app = angular.module('AngularApp', ["ngRoute", 'ngProgressLite']);
    app.config(['ngProgressLiteProvider', function (ngProgressLiteProvider) {
        ngProgressLiteProvider.settings.ease = 'ease-in';
    }]);
    app.config(function ($routeProvider) {
        $routeProvider.when("/main", {
            templateUrl: "/app/View/Main.html",
            controller: "MainController"
        }).when("/user/:username", {
            templateUrl: "/app/View/UserDetails.html",
            controller: "UserController"
        })

            .otherwise({ redirectTo: "/main" });

    });

}());