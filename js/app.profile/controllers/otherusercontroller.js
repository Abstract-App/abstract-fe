let OtherUserController = function(UserPageService, UserService, ProfileService, ProjectService, $state, $stateParams, $scope) {
  
  let vm = this;

  vm.addLike = addLike;

  vm.post = [];
  vm.postImg = [];
  vm.postTxt = [];
  vm.postQte = [];
  vm.postUrl = [];
  vm.postMood = [];

  // UserService.checkFileAuth();

  let id = $stateParams.id;

  console.log(id);

  ProfileService.getUser(id).then( (res) => {
    vm.profile = res.data.profile[0];
    console.log(vm.profile);
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
      } else if (p.post.post_type === 'link') {
        vm.postUrl.push(p);
      } else {
        vm.postMood.push(p);
      }

      return vm.postImg, vm.postTxt, vm.postQte, vm.postUrl, vm.postMood;

    });

  });

  function addLike (postId) {
    console.log('hi');
    // UserService.checkAuth();
    // UserPageService.likePost(postId).then( (res) => {
    //   ProjectService.getPost(postId).then( (res) => {
    //     $scope.post.post.likes_count = res.data.post.likes_count;
    //   });
    // });
  }

};

OtherUserController.$inject = ['UserPageService', 'UserService', 'ProfileService', 'ProjectService', '$state', '$stateParams', '$scope'];

export default OtherUserController;