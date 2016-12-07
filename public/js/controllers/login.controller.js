(function() {
  angular.module('two-cents')
    .controller("LoginController", LoginController);

  LoginController.$inject = ['$scope','AuthService','$location'];

  function LoginController($scope, AuthService, $location){
    $scope.login = login;
    $scope.required = true;

    function login(user){
      AuthService.login(user)
      .then(function(){
        $location.path('/');
      })
      .catch(function(){
        //at this point you should communicate to user regarding the error
        //we are not going to, for the sake of time.
        $scope.user = {};
        $location.path('/login');
      });
    }
  }
}());
