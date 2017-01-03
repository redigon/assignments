
(function () {
'use strict';

angular.module('MenuApp')
.controller('DataController', DataController);

DataController.$inject = ['items'];
function DataController(items) {
  var list = this;
  list.categories = items;

}
})();
