let UserPageController = function(UserPageService, UserService) {
  
  let vm = this;

  vm.getUserStuff = getUserStuff;

  function getUserStuff (stuffObj) {
    UserPageService.getUserItems(stuffObj).then( (res) => {
      console.log(res);
    });
  }

};

UserPageController.$inject = ['UserPageService', 'UserService'];

export default UserPageController;