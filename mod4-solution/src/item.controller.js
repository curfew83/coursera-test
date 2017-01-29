(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// Version with resolving to 1 item based on $stateParams in route config
ItemController.$inject = ['$stateParams','MenuDataService'];
function ItemController($stateParams,MenuDataService) {
  var itemDetail = this;
  var short_name = $stateParams.itemId;
  var promise = MenuDataService.getItemsForCategory(short_name);
  promise.then(function (response) {
          itemDetail.items =  response.data.menu_items;
          itemDetail.category=response.data.category.name;
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
}

})();