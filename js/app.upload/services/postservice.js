let PostService = function($http, FILESERVER, UserService) {

  let url = FILESERVER.URL;

  this.addImage = addImage;
  this.postForm = postForm;

  function addImage (file) {
    console.log(file);
    return file;
  }

  function postForm (image, userId) {
    console.log(image);

    UserService.checkFileAuth();

    let formData = new FormData();

    formData.append('post_type', 'image');
    formData.append('image', image.image);
    formData.append('title', image.title);
    formData.append('description', image.description);

    return $http.post(url + 'users/' + userId + '/posts',formData, FILESERVER.CONFIG);
  }

  
};

PostService.$inject = ['$http', 'FILESERVER', 'UserService'];

export default PostService;