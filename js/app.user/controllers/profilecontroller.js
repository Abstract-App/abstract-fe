let ProfileController = function(UserService, ProfileService, $state) {
  
  let vm = this;

  vm.upload = upload;

  function upload (profile) {
    UserService.checkAuth();
    console.log(profile);
    ProfileService.upload(profile).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });
  }

};

ProfileController.$inject = ['UserService', 'ProfileService', '$state'];

export default ProfileController;