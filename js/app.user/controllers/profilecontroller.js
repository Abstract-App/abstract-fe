let ProfileController = function(UserService, ProfileService, $state, $scope) {
  
  let vm = this;

  vm.uploadProfile = uploadProfile;

  function uploadProfile (profile) {
    UserService.checkFileAuth();
    ProfileService.uploadForm(profile).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });


    // ProfileService.uploadForm(profile, file);
    // ProfileService.upload(profile).then( (res) => {
    //   console.log(res);
    //   $state.go('root2.userhome');
    // });
  }

};

ProfileController.$inject = ['UserService', 'ProfileService', '$state', '$scope'];

export default ProfileController;