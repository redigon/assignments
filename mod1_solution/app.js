(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.food = "";
  $scope.message = "";
  //$scope.customStyle = {"color":"black"};

  $scope.CheckIfTooMuchDisplay = function () {
  var message="";
  if($scope.food == "") {
    message = "Please enter data first";
    DisplayMessageColor("red");
  }
  else {
    message = CheckIfTooMuch($scope.food);
    DisplayMessageColor("green");
  }
  $scope.message = message;
  };

  function CheckIfTooMuch(string) {
    var numberFood = string.split(',').length;
    if(numberFood <= 3) return "Enjoy";
    else return "Too Much";
  };

  function DisplayMessageColor(color)
  {
    $scope.customStyle = {"color":color};
    $scope.borderstyle = {
      "border-color":color,
      "color":color
    };
  };

};
})();
