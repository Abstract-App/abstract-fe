let UserPageService = function(SERVER, FILESERVER, $cookies, $http, UserService) {
  
  function getUserItems (id) {
    console.log(id);
    UserService.checkAuth();
    UserService.checkFileAuth();
    return $http.get(FILESERVER.URL + 'users/' + id, FILESERVER.CONFIG);
  }

};

UserPageService.$inject = ['SERVER', 'FILESERVER', '$cookies', '$http', 'UserService'];

export default UserPageService;