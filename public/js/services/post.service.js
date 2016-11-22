(function() {
  angular.module('two-cents')
         .factory('PostService', PostService);

PostService.$inject = ['$http'];

function PostService($http){
  var posts = [];
  var baseURL = '/posts/';
  init();
  return {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
  };

  function init(){
    $http.get(baseURL)
         .then(function(response){
           posts = response.data.posts;
         })
         .catch(function(err){
           console.log(err);
         });
        }
  function getAll(){
    return posts;
  }
  function getOne(id){}
  function create(newPost){}
  function update(id, updatedPost){}
  function deleteOne(id){}
}

}());
