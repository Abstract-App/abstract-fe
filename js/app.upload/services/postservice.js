let PostService = function($http, FILESERVER, UserService) {

  let url = FILESERVER.URL;

  this.addImage = addImage;
  // this.postForm = postForm;

  function addImage (file) {
    console.log(file);
    return file;
  }

  
};

PostService.$inject = ['$http', 'FILESERVER', 'UserService'];

export default PostService;