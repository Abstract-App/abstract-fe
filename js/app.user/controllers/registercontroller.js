let RegisterController = function(UserService, $state) {
  
  let vm = this;

  vm.register = register;

  function register (userObj) {
    UserService.register(userObj).then( (res) => {
      console.log(res);
    });
  }
  
};

RegisterController.$inject = ['UserService', '$state'];

export default RegisterController;