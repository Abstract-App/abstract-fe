let LoginController = function(UserService, $state) {
  
  let vm = this;

  vm.signin = signin;

  function signin (user) {
    UserService.login(user).then( (res) => {
      console.log(res);
      UserService.userSuccess(res);
    });
  }

};

LoginController.$inject = ['UserService', '$state'];

export default LoginController;