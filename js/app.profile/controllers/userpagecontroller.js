let UserPageController = function(ProfileService, UserPageService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.post = [];

  console.log($stateParams.id);

  let id = $stateParams.id;

  UserService.checkFileAuth();
  ProfileService.getUser(id).then( (res) => {
    console.log(res);
    $state.go('root2.userhome', {id: id});
    vm.profile = res.data.profile[0];
  });

  UserPageService.getAllPosts(id).then( (res) => {
    console.log(res.data.posts);
    vm.post = res.data.posts;
  });

};

UserPageController.$inject = ['ProfileService', 'UserPageService', 'UserService', '$stateParams', '$state'];

export default UserPageController;