(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


InfoService.$inject = ['$http', 'ApiPath'];
function InfoService($http, ApiPath) {
  var service = this;
  service.info={};
  service.getInfo = function () {
    return service.info;
  };


  service.setInfo = function (info) {
    service.info=info;
  };

  service.check = function(shortname) {
     return $http.get(ApiPath + '/menu_items/'+ shortname + '.json').then(function (response) {
      console.log("response:",response);
      return false;
    }).catch(function (error) {
          console.log("Something went terribly wrong.");
          return true;
        });
  }

}



})();
