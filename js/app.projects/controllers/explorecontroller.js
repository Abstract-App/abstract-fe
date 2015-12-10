let ExploreController = function(ProjectService, UserService, $state) {
  
  let vm = this;

  vm.tiles = [];
  vm.imgTiles = [];
  vm.txtTiles = [];

  vm.addLike = addLike;

  UserService.checkAuth();

  ProjectService.getPosts().then( (res) => {
    vm.tiles = res.data.posts;

    angular.forEach(vm.tiles, function(tile) {
      if (tile.post.post_type === 'image') {
        vm.imgTiles.push(tile);
      } else if (tile.post.post_type === 'text') {
        vm.txtTiles.push(tile);
      }

      return vm.imgTiles, vm.txtTiles;
    });


  });  

  function addLike (postId) {
    console.log('you are liking this shit');
    UserService.checkAuth();
    ProjectService.likePost(postId).then( (res) => {
      ProjectService.getPost(postId).then( (res) => {
        console.log(res);
        let tile = res.data.post;
      });
    });
  }  

};

ExploreController.$inject = ['ProjectService', 'UserService', '$state'];

export default ExploreController;