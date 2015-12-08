let HomeController = function(ProjectService) {
  
  let vm = this;

  vm.addLike = addLike;

  vm.tiles = [];
  vm.imgTiles = [];
  vm.txtTiles = [];

  ProjectService.getPosts().then( (res) => {
    vm.tiles = res.data.posts;

    angular.forEach(vm.tiles, function(tile) {
      if (tile.post_type === 'image') {
        vm.imgTiles.push(tile);
      } else if (tile.post_type === 'text') {
        vm.txtTiles.push(tile);
      }

      return vm.imgTiles, vm.txtTiles;
    });


  });

  function addLike () {
    console.log('you are liking this shit');
  }  



};

HomeController.$inject = ['ProjectService'];

export default HomeController;