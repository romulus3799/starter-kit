angular.module('appRoutes', [])
	.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {

		$routeProvider
			.when('/', {
				templateUrl : 'views/home.html',
				controllerAs : 'MainController'
			})
			.when('/nerds', {
				templateUrl : 'views/nerd.html',
				controllerAs : 'NerdController'
			})

		$locationProvider.html5Mode(true)
	}])
