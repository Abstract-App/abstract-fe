let ExploreController = function(ProjectService, UserService) {
  
  let vm = this;

  vm.tiles = [];

  UserService.checkAuth();

  ProjectService.getPosts().then( (res) => {
    console.log(res.data.posts);
    vm.tiles = res.data.posts;
  }); 

};

ExploreController.$inject = ['ProjectService', 'UserService'];

export default ExploreController;