(function() {
  angular.module('two-cents')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService){
    $scope.posts = PostService.getAll;
    $scope.create = create;
    $scope.delete = deleteOne;
    $scope.updatePost = updatePost;
    $scope.getOne = getOne;
    $scope.getSelectedPost = getSelectedPost;

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

    function updatePost(id, updatedPost){
      PostService.update(id, updatedPost);
      $scope.updatedPost = {};
      $scope.updateId = '';

    }

    function getOne(id){
      PostService.getOne(id);
      // $scope.getOne = '';
    }

    function getSelectedPost(){
      $scope.selectedPost = PostService.getSelectedPost();
    }

  }
}());
