(function() {
  angular.module('two-cents')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope'];
    $scope.name = name;
  function MainController($scope){}
}());
