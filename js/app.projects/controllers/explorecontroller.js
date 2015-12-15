let ExploreController = function(ProjectService, UserService, $state, $scope) {
  
  let vm = this;

  vm.tiles = [];
  vm.imgTiles = [];
  vm.txtTiles = [];

  vm.addLike = addLike;
  vm.morePosts = morePosts;

  UserService.checkAuth();

  ProjectService.getPosts().then( (res) => {
    console.log(res);
    vm.tiles = res.data.posts;

    vm.num = Number(res.data.page);

    angular.forEach(vm.tiles, function(tile) {
      if (tile.post.post_type === 'image') {
        vm.imgTiles.push(tile);
      } else if (tile.post.post_type === 'text') {
        vm.txtTiles.push(tile);
      }

      return vm.num, vm.imgTiles, vm.txtTiles;
    });


  });  

  function addLike (postId) {
    console.log('you are liking this shit');
    UserService.checkAuth();
    ProjectService.likePost(postId).then( (res) => {
      ProjectService.getPost(postId).then( (res) => {
        $scope.tile.post.likes_count = res.data.post.likes_count;
      });
    });
  }

  function morePosts () {
    UserService.checkAuth();

    vm.num = vm.num + 1;

    ProjectService.getMorePosts(vm.num).then( (res) => {

      vm.nextTiles = res.data.posts;

      angular.forEach(vm.nextTiles, function(tile) {
        if (tile.post.post_type === 'image') {
          vm.imgTiles.push(tile);
        } else if (tile.post.post_type === 'text') {
          vm.txtTiles.push(tile);
        }
        
        return vm.imgTiles, vm.txtTiles;
      });
    });
  }  

};

ExploreController.$inject = ['ProjectService', 'UserService', '$state', '$scope'];

export default ExploreController;