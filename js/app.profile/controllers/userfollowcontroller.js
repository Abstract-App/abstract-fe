let UserFollowController = function(UserPageService, $stateParams, $state) {
  
  let vm = this;

  let id = $stateParams.id;

  UserPageService.getFollowing(id).then( (res) => {
    vm.following = res.data.following;
  });

  UserPageService.getFollowers(id).then( (res) => {
    vm.followers = res.data.followers;
  });

};

UserFollowController.$inject = ['UserPageService', '$stateParams', '$state'];

export default UserFollowController;