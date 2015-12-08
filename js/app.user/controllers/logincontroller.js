let LoginController = function(ProfileService, UserService, $state, $stateParams) {
  
  let vm = this;

  vm.signin = signin;

  function signin (user) {
    UserService.login(user).then( (res) => {
      let id = res.data.user.id;
      UserService.userSuccess(res);
      $state.go('root2.userhome');
    });
  }

};

LoginController.$inject = ['ProfileService', 'UserService', '$state', '$stateParams'];

export default LoginController;