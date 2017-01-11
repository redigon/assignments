(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var $ctrl = this;
  
    if(user) {
      $ctrl.signedUp = true;
      $ctrl.firstName = user.firstName;
      $ctrl.lastName = user.lastName;
      $ctrl.email = user.email;
      $ctrl.phone = user.phone;
      $ctrl.favoriteDish = user.favoriteDish;
        }
    else {
      $ctrl.signedUp = false;
    }
  }

})();
