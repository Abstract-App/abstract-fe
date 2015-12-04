let HomeController = function(ProjectService) {
  
  let vm = this;

  ProjectService.getPosts().then( (res) => {
    console.log(res.data.posts);
  });
  

};

HomeController.$inject = ['ProjectService'];

export default HomeController;