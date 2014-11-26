'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.controller('myAppCtrl', ['$scope','$location', '$window', function($scope, $location, $window){
	
	$scope.go = function(){
		var currentView = $location.path();
    
		if(currentView.endsWith('view1')){
			$location.path('/view2');
		}
		else{
			$location.path('/view1');	
		}
	};
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);




