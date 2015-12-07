let ImageController = function(PostService, UserService, $stateParams, $state) {

  let vm = this;
  vm.uploadImagePost = uploadImagePost;

  UserService.checkFileAuth();

  function uploadImagePost (image) {
    UserService.checkFileAuth();
    PostService.postForm(image).then( (res) => {
      let id = res.data.post[0].user_id;
      $state.go('root2.userhome', {id: id});
    });

  }

};

ImageController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default ImageController;