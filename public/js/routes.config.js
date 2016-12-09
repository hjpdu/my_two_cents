(function() {
  angular.module('two-cents')
    .config(RouterConfiguration);

    RouterConfiguration.$inject = ['$routeProvider'];

    function RouterConfiguration($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'html/views/home.html',
          controller: "HomeController",
          access: {
            restricted: false
          }
        })
        .when('/login', {
          templateUrl: 'html/views/login.html',
          controller: "LoginController",
          access: {
            restricted: false
          }
        })
        .when('/signup', {
          templateUrl: 'html/views/signup.html',
          controller: 'SignUpController',
          access: {
            restricted: false
          }
        })
        .when('/profile/:username', {
          templateUrl: 'html/views/profile.html',
          controller: 'ProfileController',
<<<<<<< HEAD
          access:{
=======
          access: {
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
            restricted: true
          }
        })
        .when('/create', {
          templateUrl: 'html/views/create.html',
          controller: 'CreateController',
          access: {
            restricted: true
          }
        })
        .when('/edit/:postId', {
          templateUrl: 'html/views/edit.html',
          controller: 'EditController',
          access: {
            restricted: true
          }
        })
        .otherwise({
          redirectTo: '/',
<<<<<<< HEAD
          access: {
=======
          access:{
>>>>>>> 2926bb8c747c625e48e31cb02a124ce8c358907f
            restricted: false
          }
        })
    }
}());
