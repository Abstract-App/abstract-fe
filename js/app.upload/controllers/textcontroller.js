let TextController = function(PostService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.uploadTextPost = uploadTextPost;

  function uploadTextPost (text) {
    UserService.checkAuth();
    PostService.postText(text).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });
  }

};

TextController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default TextController;