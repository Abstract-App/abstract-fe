let UsernavController = function(UserService, $state) {
  
  let vm = this;

  vm.logout = logout;

  function logout () {
    UserService.logout();
  }

};

UsernavController.$inject = ['UserService', '$state'];

export default UsernavController;