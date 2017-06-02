(function() {
	angular.module("RedPandaApp", ["ngRoute"]);
})()

angular.module("RedPandaApp")
	.controller("RedPandaController", RedPandaController)
	.config(RedPandaConfig);

RedPandaController.$inject = [];
RedPandaConfig.$inject = ["$routeProvider"];

function RedPandaController() {
	var self = this;
}

function RedPandaConfig($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'ng/home.view.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}