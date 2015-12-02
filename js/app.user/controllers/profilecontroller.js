let ProfileController = function(UserService, ProfileService, $state, $scope) {
  
  let vm = this;

  vm.uploadProfile = uploadProfile;
  $scope.uploadImage = uploadImage;

  function uploadImage (file) {
    console.log('this could be working');
  }

  function uploadProfile (profile, file) {
    
    // $scope.profile
    // $scope.file

    UserService.checkAuth();
    ProfileService.upload(file);
    // ProfileService.uploadForm(profile, file);
    // ProfileService.upload(profile).then( (res) => {
    //   console.log(res);
    //   $state.go('root2.userhome');
    // });
  }

};

ProfileController.$inject = ['UserService', 'ProfileService', '$state', '$scope'];

export default ProfileController;