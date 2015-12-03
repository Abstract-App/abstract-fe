let LinkController = function(PostService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.uploadLinkPost = uploadLinkPost;

  function uploadLinkPost (link) {
    UserService.checkFileAuth();
    PostService.postLink(link).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });
  }

};

LinkController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default LinkController;