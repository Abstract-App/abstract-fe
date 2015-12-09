let UserPageService = function(SERVER, FILESERVER, $cookies, $http, UserService) {

  this.getAllPosts = getAllPosts;
  this.deletePost = deletePost;
  this.likePost = likePost;

  function getAllPosts (id) {
    UserService.checkFileAuth();
    return $http.get(FILESERVER.URL + 'users/' + id + '/posts', FILESERVER.CONFIG);
  }

  function deletePost (id) {
    return $http.delete(FILESERVER.URL + 'posts/' + id, FILESERVER.CONFIG);
  }

  function likePost (postId) {
    return $http.post(SERVER.URL + 'posts/' + postId + '/likes', postId, SERVER.CONFIG);
  }

};

UserPageService.$inject = ['SERVER', 'FILESERVER', '$cookies', '$http', 'UserService'];

export default UserPageService;