(function () {
'use strict';

angular.module('Data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath) {
  var service = this;

  service.getAllCategories = function()
  {
    console.log("Entering MenuDataService.getAllCategories...");
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    })
    .then(function(response){
      return response.data;
    });
    // .then(function (result) {
    //
    //  console.log("Entering MenuDataService.getAllCategories with result.data = "+ result.data);
    // // return processed items
    // return result;
    // });

  };
  service.getItemsForCategory = function(categoryShortName)
  {
    console.log("Entering getItemsFor Category ...");
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
    })
    .then(function (result) {
     console.log("Entering getItemsFor Category  then function result is ..."+ result.data.menu_items);
    // return processed items
    return result.data.menu_items;
    });
  }


}

})();
