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

  function getAllPosts (id) {
    UserService.checkFileAuth();
    return $http.get(FILESERVER.URL + 'users/' + id + '/posts', FILESERVER.CONFIG);
  }

  function editImagePost (image, id) {
    let formData = new FormData();
    formData.append('post_type', 'image');
    formData.append('image', image.image);
    formData.append('title', image.title);
    formData.append('description', image.description);
    formData.append('tag_phrases', '#' +image.tag_phrases);
    return $http.put(FILESERVER.URL + 'posts/' + id, formData, FILESERVER.CONFIG);
  }

  function editQuotePost(quote, id) {
    let Quote = function (quote) {
      this.post_type = 'quote';
      this.quote = quote.quote;
      this.tag_phrases = '#' + quote.tag_phrases;
    };
    let q = new Quote(quote);
    return $http.put(SERVER.URL + 'posts/' + id, q, SERVER.CONFIG);
  }

  function editTextPost(text, id) {
    let Text = function (text) {
      this.post_type = 'text';
      this.status = text.status;
      this.tag_phrases = '#' + text.tag_phrases;
    };
    let t = new Text(text);
    return $http.put(SERVER.URL + 'posts/' + id, t, SERVER.CONFIG);
  }

  function editUrlPost(link, id) {
    let Link = function (link) {
      this.post_type = 'link';
      this.url = link.url;
      this.description = link.description;
      this.tag_phrases = '#' + link.tag_phrases;
    };
    let l = new Link(link);
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

};

UserPageService.$inject = ['SERVER', 'FILESERVER', '$cookies', '$http', 'UserService'];

export default UserPageService;