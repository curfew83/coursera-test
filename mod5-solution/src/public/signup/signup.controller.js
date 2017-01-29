(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject=['InfoService']
function SignupController(InfoService) {
  var $ctrl = this;
  $ctrl.valid=false;
  $ctrl.submit =function () {
       var shortname=$ctrl.user.favourate;
       $ctrl.valid=InfoService.check(shortname);
       if($ctrl.valid) {
       		InfoService.setInfo($ctrl.user);
       }
  }
}


})();