let UserPageController = function(ProfileService, UserPageService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.getUserStuff = getUserStuff;

  console.log($stateParams.id);

  let id = $stateParams.id;

  UserService.checkFileAuth();
  ProfileService.getUser(id).then( (res) => {
    console.log(res);
    $state.go('root2.userhome', {id: id});
  });

  function getUserStuff (stuffObj) {
    UserPageService.getUserItems(stuffObj).then( (res) => {
      console.log(res);
    });
  }

};

UserPageController.$inject = ['ProfileService', 'UserPageService', 'UserService', '$stateParams', '$state'];

export default UserPageController;