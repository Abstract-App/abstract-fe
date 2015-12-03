let ProfileController = function(UserService, $stateParams, ProfileService, $state, $scope) {
  
  let vm = this;

  vm.uploadProfile = uploadProfile;
  vm.getProfile = getProfile;

  function uploadProfile (profile) {
    UserService.checkFileAuth();
    ProfileService.uploadForm(profile).then( (res) => {
      console.log(res);
    });
  }

  function getProfile () {
    UserService.checkFileAuth();
    ProfileService.getUser($stateParams.user_id).then( (res) => {
      console.log(res);
    });
  }

};

ProfileController.$inject = ['UserService', '$stateParams', 'ProfileService', '$state', '$scope'];

export default ProfileController;