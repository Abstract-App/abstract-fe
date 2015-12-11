let UserPageService = function(SERVER, FILESERVER, $cookies, $http, UserService) {

  this.getAllPosts = getAllPosts;
  this.editImagePost = editImagePost;
  this.editQuotePost = editQuotePost;
  this.editTextPost = editTextPost;
  this.editUrlPost = editUrlPost;
  this.deletePost = deletePost;
  this.likePost = likePost;

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

  function editTextPost(id) {

  }

  function editUrlPost(id) {

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