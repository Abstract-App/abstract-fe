let HomeController = function(ProjectService) {
  
  let vm = this;

  vm.tiles = [];

  ProjectService.getPosts().then( (res) => {
    vm.tiles = res.data.posts;
  });  



};

HomeController.$inject = ['ProjectService'];

export default HomeController;