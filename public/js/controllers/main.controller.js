(function() {
  angular.module('two-cents')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope'];

  function MainController($scope){
    $scope.name = name;
    $scope.stuff = stuff;

    function stuff(){
      alert('i also work');
    }
  }
}());
