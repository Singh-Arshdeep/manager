/**
 * The main configuration file for the application.
 */
var app = angular.module("managerApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
    $routeProvider
    .when("/dashboard", {
        templateUrl : "/personal-manager/partials/dashboard.html"
    })
    .when("/sign-up", {
        template : "<h3 style='padding: 1%'>Coming soon...</h3>"
    })
    .when("/sign-in", {
        template : "<h3 style='padding: 1%''>Coming soon...</h3>"
    })
    .when("/about-us", {
        templateUrl : "/personal-manager/partials/about-us.html"
    })
    .when("/error", {
        templateUrl : "/personal-manager/partials/dashboard.html"
    })
    .otherwise({
    	redirectTo: '/dashboard'
    });
});

app.controller('MenuCtrl', function($scope) {
	  $scope.activeMenu = 'Home';
});
