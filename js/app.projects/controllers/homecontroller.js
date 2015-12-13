let HomeController = function(ProjectService, UserService) {
  
  let vm = this;

  vm.tiles = [];
  vm.imgTiles = [];
  vm.txtTiles = [];
  vm.moodTiles = [];

  ProjectService.getPosts().then( (res) => {
    vm.tiles = res.data.posts;

    angular.forEach(vm.tiles, function(tile) {
      if (tile.post.post_type === 'image') {
        vm.imgTiles.push(tile);
      } else if (tile.post.post_type === 'text') {
        vm.txtTiles.push(tile);
      } else if (tile.post.post_type === 'moodboard') {
        vm.moodTiles.push(tile);
      }

      return vm.imgTiles, vm.txtTiles, vm.moodTiles;
    });


  });




};

HomeController.$inject = ['ProjectService', 'UserService'];

export default HomeController;