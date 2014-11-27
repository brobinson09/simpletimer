'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.directive('countdownTimer', ['$interval', 'dateFilter', function($interval, dateFilter){

	function link(scope, element, attrs){
		var format = false;
		var time = new Date();
		var timeoutId;

		function updateTime(){

			if(time > 0){
				time -= 1000;
				element.text(new Date().getTime());
			}
			else{
				element.text(dateFilter(0, format ? 'hh:mm:ss' : 'hh:mm:ss'));
			}

		}

		scope.$watch(attrs.countdownTimer, function(value) {
			if(value > 60)
				format = true;
			else format = false;


			//time = new Date();
      //alert(time.getTime());
      //time.setTime(60*60*1000);
      //alert(time.getTime());

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

.controller('View2Ctrl', ['$scope', '$interval', function($scope, $interval) {
	//var interval =

}]);
