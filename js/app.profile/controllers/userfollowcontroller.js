let UserFollowController = function(UserPageService, $stateParams, $state) {
  
  let vm = this;

  let id = $stateParams.id;

  UserPageService.getFollowing(id).then( (res) => {
    vm.following = res.data.following;
    console.log(vm.following);
  });

};

UserFollowController.$inject = ['UserPageService', '$stateParams', '$state'];

export default UserFollowController;