(function() {
  angular.module('two-cents')
         .factory('PostService', PostService);

PostService.$inject = ['$http'];

function PostService($http){
  var posts = [];
  var selectedPost;
  var baseURL = '/posts/';
  init();
  return {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne,
    getSelectedPost: getSelectedPost
  };
  function getSelectedPost(){
    return selectedPost;
  }
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
  function getOne(id){
    $http.get(baseURL + id)
         .then(function(response){
           selectedPost = response.data.post[0]; //forewarning: if the get returns an empty array this will cause an err
         })
         .catch(function(error){
           console.log(error);
         });
  }
  function create(newPost){
    $http.post(baseURL, newPost)
         .then(function(response){
           init();
         })
         .catch(function(error){
           console.log(error);
         });
  }
  function update(id, updatedPost){
    $http.put(baseURL + id, updatedPost)
         .then(function(response){
           init();
         })
         .catch(function(error){
           console.log(error);
         });
  }
  function deleteOne(id){
    $http.delete(baseURL + id)
          .then(function(response){
            init();
          })
          .catch(function(err){
            console.log(err);
          });
  }
}

}());
