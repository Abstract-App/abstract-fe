let SinglePostController = function($state, $stateParams, UserService, ProfileService, ProjectService, UserPageService) {
  
  let vm = this;

  vm.deletePost = deletePost;

  ProjectService.getPost($stateParams.id).then( (res) => {
    console.log(res.data.post[0]);
    vm.post = res.data.post[0];
    vm.userId = res.data.post[0].user_id;
    // console.log(vm.userId);
    return vm.userId;
  });

  let id = $stateParams.id;

  function deletePost (userId) {
    console.log('fucking delete it');
    UserService.checkFileAuth();
    UserPageService.deletePost(id).then( (res) => {
      $state.go('root2.userhome', {id: userId});
    });
  }

};

SinglePostController.$inject = ['$state', '$stateParams', 'UserService', 'ProfileService', 'ProjectService', 'UserPageService'];

export default SinglePostController;