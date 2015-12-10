let TextController = function(PostService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.uploadTextPost = uploadTextPost;

  function uploadTextPost (text) {
    UserService.checkAuth();
    PostService.postText(text).then( (res) => {
      let id = res.data.post.user_id;
      $state.go('root2.userhome', {id: id});
    });
  }

};

TextController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default TextController;