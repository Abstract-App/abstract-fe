let ImageController = function(PostService, UserService, $stateParams, $state) {

  let vm = this;
  vm.uploadImagePost = uploadImagePost;

  UserService.checkFileAuth();

  function uploadImagePost (image) {
    UserService.checkFileAuth();
    PostService.postForm(image).then( (res) => {
      let id = res.data.post.user_id;
      $state.go('allposts', {id: id});
    });

  }

};

ImageController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default ImageController;