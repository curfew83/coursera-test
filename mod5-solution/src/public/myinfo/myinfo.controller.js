(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['infos'];
function MyinfoController(infos) {
  var $ctrl = this;
  $ctrl.infos=infos;
}


})();
