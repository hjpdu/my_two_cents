(function() {
  angular.module('two-cents')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.posts = PostService.getAll;
    $scope.create = create;
    $scope.delete = deleteOne;

    $scope.$watch(function(){
      return PostService.getAll();
    },function(){
      $scope.posts = PostService.getAll();
    });

    function create(newPost){
      PostService.create(newPost);
      $scope.newPost = {}; //clears form when function runs
    }

    function deleteOne(id){
      PostService.delete(id);
      $scope.id = '';
    }

  }
}());
