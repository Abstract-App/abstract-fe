let UserPageController = function(ProfileService, UserPageService, UserService, $stateParams, $state, $cookies) {
  
  let vm = this;

  vm.post = [];
  vm.postImg = [];
  vm.postTxt = [];
  vm.postQte = [];
  vm.postUrl = [];

  // function getId () {
  //   if ($stateParams) {  
  //     id = $stateParams.id;
  //   } else {
  //     id = $cookies.get(id);
  //     console.log(id);
  //   }  
  //   return id;
  // }

  UserService.checkFileAuth();
  let id = ($stateParams.id) ? $stateParams.id : $cookies.get('id');
  ProfileService.getUser(id).then( (res) => {
    $state.go('root2.userhome');
    vm.profile = res.data.profile[0];
  });

  UserPageService.getAllPosts(id).then( (res) => {
    vm.post = res.data.posts;

    angular.forEach(vm.post, function(p) {
      if (p.post.post_type === 'image') {
        vm.postImg.push(p);
      } else if (p.post.post_type === 'text') {
        vm.postTxt.push(p);
      } else if (p.post.post_type === 'quote') {
        vm.postQte.push(p);
      } else {
        vm.postUrl.push(p);
      }

      return vm.postImg, vm.postTxt, vm.postQte, vm.postUrl;
    });

  });

};

UserPageController.$inject = ['ProfileService', 'UserPageService', 'UserService', '$stateParams', '$state', '$cookies'];

export default UserPageController;