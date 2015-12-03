let LoginController = function(ProfileService, UserService, $state, $stateParams) {
  
  let vm = this;

  vm.signin = signin;

  function signin (user) {
    UserService.login(user).then( (res) => {
      console.log(res.data.user);
      let id = res.data.user.id;
      UserService.userSuccess(res);
      ProfileService.getUser(id).then( (res) => {
        console.log(res);
        $state.go('root2.userhome');
      });
    });
  }

};

LoginController.$inject = ['ProfileService', 'UserService', '$state', '$stateParams'];

export default LoginController;