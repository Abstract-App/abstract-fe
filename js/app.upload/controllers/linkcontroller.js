let LinkController = function(PostService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.uploadLinkPost = uploadLinkPost;

  function uploadLinkPost (link) {
    UserService.checkAuth();
    PostService.postLink(link).then( (res) => {
      console.log(res);
      let id = res.data.post.user_id;
      $state.go('root2.userhome', {id: id});
    });
  }

};

LinkController.$inject = ['PostService', 'UserService', '$stateParams', '$state'];

export default LinkController;