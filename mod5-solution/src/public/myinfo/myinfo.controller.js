(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['infos','menuItem'];
function MyinfoController(infos,menuItem) {
  var $ctrl = this;
  $ctrl.hasreg=false;
  console.log("info",infos);
  if(infos!==undefined) {
  	console.log("info1",infos);
  	$ctrl.hasreg=true;
  }
  console.log("info2",infos);
  $ctrl.infos=infos;
  $ctrl.menuItem=menuItem;
  $ctrl.basePath='https://ychaikin-coursera5.herokuapp.com';
}


})();
