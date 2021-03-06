let UserPageController = function(ProjectService, ProfileService, UserPageService, UserService, $stateParams, $state, $cookies, $scope) {
  
  let vm = this;

  vm.addLike = addLike;
  vm.follow = follow;
  vm.morePosts = morePosts;

  // for posts

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

  // for favorites

  vm.faveImg = [];
  vm.faveTxt = [];
  vm.faveQte = [];
  vm.faveUrl = [];
  vm.faveMood1 = [];
  vm.faveMood2 = [];
  vm.faveMood3 = [];
  vm.faveMood4 = [];
  vm.faveMood5 = [];

  UserService.checkFileAuth();
  let id = ($stateParams.id) ? $stateParams.id : $cookies.get('id');
  ProfileService.getUser(id).then( (res) => {   
    vm.profile = res.data.user;
    vm.profile.website = vm.profile.website.replace('http://', '');
  });

  UserPageService.getFollowing(id).then( (res) => {
    vm.following = res.data.following;
    vm.followingNum = vm.following.length;
  });

  UserPageService.getFollowers(id).then( (res) => {
    vm.followers = res.data.followers;
    vm.followerNum = vm.followers.length;

    angular.forEach(vm.followers, function(f) {
      if (Number(f.user_id) === Number($cookies.get('id'))) {
        vm.meFollow = f;
      }
    });
  });

  UserPageService.getAllPosts(id).then( (res) => {
    vm.post = res.data.posts;

    vm.num = Number(res.data.page);

    vm.pages = Number(res.data.page_count);

    if (vm.pages > 1) {
      vm.multi = true;
    }

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

      vm.postMood = vm.postMood1.concat(vm.postMood2, vm.postMood3, vm.postMood4, vm.postMood5);
      

      return vm.postImg, vm.postTxt, vm.postQte, vm.postUrl, vm.postMood1, vm.postMood2, vm.postMood3, vm.postMood4, vm.postMood5;
    });

  });

  UserPageService.getSavedPosts(id).then( (res) => {
    vm.favorites = res.data.likes;

    angular.forEach(vm.favorites, function(f) {
      if (f.like.post_type === 'image') {
        vm.faveImg.push(f);
      } else if (f.like.post_type === 'text') {
        vm.faveTxt.push(f);
      } else if (f.like.post_type === 'quote') {
        vm.faveQte.push(f);
      } else if (f.like.post_type === 'link') {
        vm.faveUrl.push(f);
      } else if (f.like.moodboard_css_class === 'temp1') {
        vm.faveMood1.push(f);
      } else if (f.like.moodboard_css_class === 'temp2') {
        vm.faveMood2.push(f);
      } else if (f.like.moodboard_css_class === 'temp3') {
        vm.faveMood3.push(f);
      } else if (f.like.moodboard_css_class === 'temp4') {
        vm.faveMood4.push(f);
      } else if (f.like.moodboard_css_class === 'temp5') {
        vm.faveMood5.push(f);
      } 
      
      return vm.faveImg, vm.faveTxt, vm.faveQte, vm.faveUrl, vm.faveMood1, vm.faveMood2, vm.faveMood3, vm.faveMood4, vm.faveMood5;
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
    UserPageService.followUser(id).then( (res) => {
      $state.reload();
    });
  }

  function morePosts () {
    UserService.checkAuth();

    vm.num = vm.num + 1;
    
    UserPageService.getMorePosts(id, vm.num).then( (res) => {

      vm.nextTiles = res.data.posts;

      angular.forEach(vm.nextTiles, function(p) {
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
  }


};

UserPageController.$inject = ['ProjectService', 'ProfileService', 'UserPageService', 'UserService', '$stateParams', '$state', '$cookies', '$scope'];

export default UserPageController;