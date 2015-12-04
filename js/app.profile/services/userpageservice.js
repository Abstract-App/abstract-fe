let UserPageService = function(SERVER, FILESERVER, $cookies, $http, UserService) {

  this.getAllPosts = getAllPosts;

  function getAllPosts (id) {
    console.log();
    UserService.checkAuth();
    UserService.checkFileAuth();
    return $http.get(FILESERVER.URL + 'users/' + id + '/posts', FILESERVER.CONFIG);
  }

};

UserPageService.$inject = ['SERVER', 'FILESERVER', '$cookies', '$http', 'UserService'];

export default UserPageService;