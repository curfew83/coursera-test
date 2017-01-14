(function () {
'use strict';
console.log("start");
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.removeItem=function (itemIndex) {
    list.items.splice(itemIndex, 1);
  };

  list.check=function () {
      console.log("start 1");
      var promise = MenuSearchService.getMatchedMenuItems();
      promise.then(function (result) {
        // process result and only keep items that match
        var message=result.data.menu_items;
        console.log(message);
        list.items=[];
        for (var i = 0; i < message.length; i++) {
          if(message[i].description.indexOf(list.keyVal)!=-1) {
            list.items.push(message[i]);
          }
        }
        
        
        // return processed items
       });
        console.log(list.items);
      };

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  service.getMatchedMenuItems = function() {
    console.log("test");
    return $http({
        method:"GET",
        url: "http://davids-restaurant.herokuapp.com/menu_items.json"
    });
  };
}

function FoundItemsDirective() {
  var ddo = {
  templateUrl: 'foundItems.html',
  scope: {
    items:'<',
    onRemove: '&'
  },
  controller: FoundItemsDirectiveController,
  controllerAs: 'list',
  bindToController: true
  
  };
  return ddo;
  }

function FoundItemsDirectiveController() {
  var list = this;

  list.checkList = function () {
    console.log("foundItem: "+list.items);
    if(list.items===undefined || list.items.length==0) {
      return true;
    } else {
      return false;
    } 
  };
}


})();
