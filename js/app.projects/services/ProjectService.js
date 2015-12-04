let ProjectService = function($http, FILESERVER) {

  let url = FILESERVER.URL;
  
  this.getPosts = getPosts;

  function getPosts () {
    return $http.get(url + 'posts', FILESERVER.CONFIG);
  }



};

ProjectService.$inject = ['$http', 'FILESERVER'];

export default ProjectService;