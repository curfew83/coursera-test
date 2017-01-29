(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/category.template.html',
  bindings: {
    items: '<'
  }
});

})();
