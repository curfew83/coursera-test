(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;
  buyer.toBuyItems = ShoppingListCheckOffService.gettoBuyItems();
  
  buyer.buyItem = function (itemIdex) {
    ShoppingListCheckOffService.buyItem(itemIdex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var getter = this;
  getter.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var tobuyitems = [{name:"cookies",quantity:10},{name:"cookies",quantity:11},{name:"cookies",quantity:12},{name:"cookies",quantity:13},{name:"cookies",quantity:15}];
  var alreadybuyitems = [];

  service.buyItem = function (itemIdex) {
    var item = tobuyitems[itemIdex];
    tobuyitems.splice(itemIdex,1);
    alreadybuyitems.push(item);
  };

  service.gettoBuyItems= function () {
    console.log(tobuyitems.length);
    return tobuyitems;
  };

  service.getBoughtItems= function () {
    return alreadybuyitems;
  };
}

})();
