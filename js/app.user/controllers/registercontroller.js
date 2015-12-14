let RegisterController = function(UserService, $state) {
  
  let vm = this;

  vm.register = register;

  function register (user) {
    UserService.register(user).then( (res) => {
      console.log(res);
      UserService.userSuccess(res);
      $state.go('root.addprofile');
    });
  }
  
};

RegisterController.$inject = ['UserService', '$state'];

export default RegisterController;