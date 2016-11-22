(function() {
  angular.module('two-cents')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.name = name;
    $scope.stuff = stuff;

    function stuff(){
      alert('i also work');
    }
  }
}());
