let ProjectService = function($http, FILESERVER, SERVER) {

  let url = FILESERVER.URL;
  
  this.getPosts = getPosts;
  this.getPost = getPost;
  this.postComment = postComment;
  this.likePost = likePost;

  function getPosts () {
    return $http.get(url + 'posts', FILESERVER.CONFIG);
  }

  function getPost (id) {
    return $http.get(url + 'posts/' + id, FILESERVER.CONFIG);
  }

  let Comment = function (commentObj, id) {
    this.post_id = id;
    this.message = commentObj.message;
  };

  function postComment (commentObj, id) {
    let c = new Comment(commentObj, id);
    return $http.post(url + 'posts/' + id + '/comments', c, SERVER.CONFIG);
  }

  function likePost () {
    console.log('post is liked');
  }




};

ProjectService.$inject = ['$http', 'FILESERVER', 'SERVER'];

export default ProjectService;