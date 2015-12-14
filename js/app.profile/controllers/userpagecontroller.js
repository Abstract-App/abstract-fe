let UserPageController = function(ProjectService, ProfileService, UserPageService, UserService, $stateParams, $state, $cookies, $scope) {
  
  let vm = this;

  vm.addLike = addLike;
  vm.follow = follow;

  vm.post = [];
  vm.postImg = [];
  vm.postTxt = [];
  vm.postQte = [];
  vm.postUrl = [];
  vm.postMood1 = [];
  vm.postMood2 = [];
  vm.postMood3 = [];
  vm.postMood4 = [];
  vm.postMood5 = [];

  UserService.checkFileAuth();
  let id = ($stateParams.id) ? $stateParams.id : $cookies.get('id');
  ProfileService.getUser(id).then( (res) => {   
    vm.profile = res.data.user;
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
      } else if (p.post.moodboard_css_class === 'temp1') {
        vm.postMood1.push(p);
      } else if (p.post.moodboard_css_class === 'temp2') {
        vm.postMood2.push(p);
      } else if (p.post.moodboard_css_class === 'temp3') {
        vm.postMood3.push(p);
      } else if (p.post.moodboard_css_class === 'temp4') {
        vm.postMood4.push(p);
      } else if (p.post.moodboard_css_class === 'temp5') {
        vm.postMood5.push(p);
      } 
      return vm.postImg, vm.postTxt, vm.postQte, vm.postUrl, vm.postMood1, vm.postMood2, vm.postMood3, vm.postMood4, vm.postMood5;
    });

  });

  function addLike (postId) {
    UserService.checkAuth();
    UserPageService.likePost(postId).then( (res) => {
      ProjectService.getPost(postId).then( (res) => {
        $scope.post.post.likes_count = res.data.post.likes_count;
      });
    });
  }

  function follow () {
    UserPageService.followUser($stateParams.id).then( (res) => {
      console.log(res);
    });
  }

};

UserPageController.$inject = ['ProjectService', 'ProfileService', 'UserPageService', 'UserService', '$stateParams', '$state', '$cookies', '$scope'];

export default UserPageController;