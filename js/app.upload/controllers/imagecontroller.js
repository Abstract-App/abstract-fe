let ImageController = function(PostService, UserService, $stateParams, $state) {

  let vm = this;

  vm.uploadImagePost = uploadImagePost;

  function uploadImagePost (image) {
    UserService.checkFileAuth();
    PostService.postForm(image, $stateParams.user_id).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });


  }

};

ImageController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default ImageController;