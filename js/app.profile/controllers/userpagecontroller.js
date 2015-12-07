let UserPageController = function(ProfileService, UserPageService, UserService, $stateParams, $state) {
  
  let vm = this;

  vm.post = [];
  vm.postImg = [];
  vm.postTxt = [];
  vm.postQte = [];
  vm.postUrl = [];

  let id = $stateParams.id;

  UserService.checkFileAuth();
  ProfileService.getUser(id).then( (res) => {
    $state.go('root2.userhome', {id: id});
    vm.profile = res.data.profile[0];
  });

  UserPageService.getAllPosts(id).then( (res) => {
    vm.post = res.data.posts;

    angular.forEach(vm.post, function(p) {
      if (p.post_type === 'image') {
        vm.postImg.push(p);
      } else if (p.post_type === 'text') {
        vm.postTxt.push(p);
      } else if (p.post_type === 'quote') {
        vm.postQte.push(p);
      } else {
        vm.postUrl.push(p);
      }

      return vm.postImg, vm.postTxt, vm.postQte, vm.postUrl;
    });

  });

};

UserPageController.$inject = ['ProfileService', 'UserPageService', 'UserService', '$stateParams', '$state'];

export default UserPageController;