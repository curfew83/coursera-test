(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var mainList = this;
  var promise= MenuDataService.getAllCategories();
  promise.then(function (response) {
          mainList.items =  response.data;
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
}

})();