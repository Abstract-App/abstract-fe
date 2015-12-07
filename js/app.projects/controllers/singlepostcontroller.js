let SinglePostController = function($stateParams, ProjectService, UserPageService) {
  
  let vm = this;

  ProjectService.getPost($stateParams.id).then( (res) => {
    console.log(res.data.post[0]);
    vm.post = res.data.post[0];
  });

};

SinglePostController.$inject = ['$stateParams', 'ProjectService', 'UserPageService'];

export default SinglePostController;