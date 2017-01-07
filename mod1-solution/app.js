(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
   $scope.output="";
   $scope.checknum=function () {
   	    if ($scope.lunch=="" || $scope.lunch===undefined) {
   			$scope.output="Please enter data first";
   			$scope.fontcolor="red";
			$scope.bordercolor="red";
   			return;
   		}
   		var num=$scope.lunch.split(',').length;
   		if(num<=3) {
   			$scope.output="Enjoy!";
   			$scope.fontcolor="green";
   			$scope.bordercolor="green";
   		} else {
   			$scope.output="Too Much!";
   			$scope.fontcolor="green";
   			$scope.bordercolor="green";
   		}
   }
}

})();
