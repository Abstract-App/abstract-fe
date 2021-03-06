let UsernavController = function(UserService, $state, $cookies) {
  
  let vm = this;

  vm.logout = logout;
  vm.userHome = userHome;

  function logout () {
    UserService.logout();
  }

  function userHome () {
    let id = $cookies.get('id');
    $state.go('allposts', {id: id});
  }

};

UsernavController.$inject = ['UserService', '$state', '$cookies'];

export default UsernavController;