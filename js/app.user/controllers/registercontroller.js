let RegisterController = function(UserService, $state) {
  
  let vm = this;

  vm.register = register;

  function register (user) {
    UserService.register(user).then( (res) => {
      console.log(res);
      UserService.checkAuth();
      $state.go('root2.addprofile');
    });
  }
  
};

RegisterController.$inject = ['UserService', '$state'];

export default RegisterController;