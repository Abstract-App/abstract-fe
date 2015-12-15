let ProjectService = function($http, FILESERVER, SERVER) {

  let url = FILESERVER.URL;
  
  this.getPosts = getPosts;
  this.getPost = getPost;
  this.postComment = postComment;
  this.likePost = likePost;
  this.getMorePosts = getMorePosts;

  function getPosts () {
    return $http.get(url + 'posts?page=1', FILESERVER.CONFIG);
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

  function likePost (postId) {
    return $http.post(url + 'posts/' + postId + '/likes', postId, SERVER.CONFIG);
  }

  function getMorePosts (num) {
    return $http.get(url + 'posts?page=' + num, FILESERVER.CONFIG);
  }

};

ProjectService.$inject = ['$http', 'FILESERVER', 'SERVER'];

export default ProjectService;