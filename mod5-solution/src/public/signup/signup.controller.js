(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject=['InfoService','$http']
function SignupController(InfoService,$http) {
  var $ctrl = this;
  $ctrl.valid=false;
  $ctrl.submit =function () {
       var shortname=$ctrl.user.favourate;

       $http.get('https://ychaikin-coursera5.herokuapp.com' + '/menu_items/'+ shortname + '.json').then(function (response) {
      		console.log("response:",response);
      		InfoService.setInfo($ctrl.user);
      }).catch(function(error) {
      		console.log("error:");
       		$ctrl.valid=true;
       });
  }
}


})();