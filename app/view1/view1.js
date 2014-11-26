'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.directive('currentTime', ['$interval', 'dateFilter', function($interval, dateFilter){
	
	function link(scope, element, attrs){
		var format = 'MM/dd/yyyy hh:mm:ss a';
		var timeoutId;

		function updateTime(){
			element.text(dateFilter(new Date(), format));	
			
		}

		scope.$watch(attrs.currentTime, function() {
			//format = value;
			updateTime();			
		});

		element.on('$destroy', function(){
			$interval.cancel(timeoutId);
		});

		timeoutId = $interval(function(){
			updateTime();
		}, 1000);
	}

		return {
			link : link
		};
}])
.controller('View1Ctrl', ['$scope', '$location', function($scope, $location) {
	var date = new Date();
	$scope.theTime = date.getTime();

	
}]);
