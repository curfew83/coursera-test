(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/itemDetail.template.html',
  bindings: {
    items: '<'
  }
});

})();