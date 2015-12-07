let ProjectService = function($http, FILESERVER) {

  let url = FILESERVER.URL;
  
  this.getPosts = getPosts;
  this.getPost = getPost;

  function getPosts () {
    return $http.get(url + 'posts', FILESERVER.CONFIG);
  }

  function getPost (id) {
    return $http.get(url + 'posts' + '/' + id, FILESERVER.CONFIG);
  }



};

ProjectService.$inject = ['$http', 'FILESERVER'];

export default ProjectService;