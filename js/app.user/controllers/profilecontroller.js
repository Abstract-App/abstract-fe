let ProfileController = function(UserService, $stateParams, ProfileService, $state, $scope) {
  
  let vm = this;

  vm.uploadProfile = uploadProfile;

  function uploadProfile (profile) {
    UserService.checkFileAuth();
    ProfileService.uploadForm(profile).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });
  }

  activate();

  function activate () {
    UserService.checkFileAuth();
    ProfileService.getUser($stateParams.id).then( (res) => {
      console.log(res);
    });
  }

};

ProfileController.$inject = ['UserService', '$stateParams', 'ProfileService', '$state', '$scope'];

export default ProfileController;