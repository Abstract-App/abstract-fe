let ProfileController = function(UserService, $stateParams, ProfileService, $state, $scope) {
  
  let vm = this;

  vm.uploadProfile = uploadProfile;

  function uploadProfile (profile) {
    UserService.checkFileAuth();
    ProfileService.uploadForm(profile).then( (res) => {
      $state.go('root.login');
    });
  }

};

ProfileController.$inject = ['UserService', '$stateParams', 'ProfileService', '$state', '$scope'];

export default ProfileController;