let ExploreController = function(ProjectService, UserService) {
  
  let vm = this;

  vm.tiles = [];
  vm.imgTiles = [];
  vm.txtTiles = [];

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

};

ExploreController.$inject = ['ProjectService', 'UserService'];

export default ExploreController;