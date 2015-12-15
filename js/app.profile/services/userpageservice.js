let UserPageService = function(SERVER, FILESERVER, $cookies, $http, UserService) {

  this.getAllPosts = getAllPosts;
  this.editImagePost = editImagePost;
  this.editQuotePost = editQuotePost;
  this.editTextPost = editTextPost;
  this.editUrlPost = editUrlPost;
  this.deletePost = deletePost;
  this.likePost = likePost;
  this.followUser = followUser;
  this.getFollowing = getFollowing;
  this.getFollowers = getFollowers;
  this.getMorePosts = getMorePosts;

  function getAllPosts (id) {
    UserService.checkFileAuth();
    return $http.get(FILESERVER.URL + 'users/' + id + '/posts', FILESERVER.CONFIG);
  }

  function editImagePost (id, title, des, tags) {
    UserService.checkAuth();
    let UpdateImg = function (id, title, des, tags) {
      this.post_id = id;
      this.title = title;
      this.description = des;
      this.tag_phrases = tags;
    };

    let u = new UpdateImg(id, title, des, tags);
    return $http.put(SERVER.URL + 'posts/' + id, u, SERVER.CONFIG);
  }

  function editQuotePost(id, post) {
    let Quote = function (post) {
      this.post_type = 'quote';
      this.quote = post.quote;
      this.tag_phrases = post.tags;
    };
    let q = new Quote(post);
    return $http.put(SERVER.URL + 'posts/' + id, q, SERVER.CONFIG);
  }

  function editTextPost(id, post) {
    let Text = function (post) {
      this.post_type = 'text';
      this.status = post.status;
      this.tag_phrases = post.tags;
    };
    let t = new Text(post);
    return $http.put(SERVER.URL + 'posts/' + id, t, SERVER.CONFIG);
  }

  function editUrlPost(id, post) {
    let Link = function (post) {
      this.post_type = 'link';
      this.url = post.url;
      this.description = post.description;
      this.tag_phrases = post.tags;
    };
    let l = new Link(post);
    return $http.put(SERVER.URL + 'posts/' + id, l, SERVER.CONFIG);
  }

  function deletePost (id) {
    return $http.delete(FILESERVER.URL + 'posts/' + id, FILESERVER.CONFIG);
  }

  function likePost (postId) {
    return $http.post(SERVER.URL + 'posts/' + postId + '/likes', postId, SERVER.CONFIG);
  }

  function followUser (userId) {
    let Following = function (userId) {
      this.followed_id = userId;
    };

    let f = new Following (userId);

    return $http.post(SERVER.URL + 'relationships', f, SERVER.CONFIG);
  }

  function getFollowing (userId) {
    UserService.checkAuth();
    
    return $http.get(SERVER.URL + 'users/' + userId + '/following', SERVER.CONFIG);
  }

  function getFollowers (userId) {
    UserService.checkAuth();

    return $http.get(SERVER.URL + 'users/' + userId + '/followers', SERVER.CONFIG);
  }

  function getMorePosts (userId, num) {
    UserService.checkAuth();

    return $http.get(FILESERVER.URL + 'users/' + userId + '/posts?page=' + num, FILESERVER.CONFIG);
  }

};

UserPageService.$inject = ['SERVER', 'FILESERVER', '$cookies', '$http', 'UserService'];

export default UserPageService;