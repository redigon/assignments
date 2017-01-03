(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    items: '<',
    myTitle: '@title'
  }
  // controller: CategoriesControler
});


// SpinnerController.$inject = ['$rootScope']
// function SpinnerController($rootScope) {
//   var $ctrl = this;
//
// };

})();
