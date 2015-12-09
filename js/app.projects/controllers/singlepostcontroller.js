let SinglePostController = function($state, $stateParams, UserService, ProfileService, ProjectService, UserPageService) {
  
  let vm = this;

  vm.deletePost = deletePost;
  vm.addComment = addComment;

  ProjectService.getPost($stateParams.id).then( (res) => {
    vm.post = res.data.post;
    vm.userId = res.data.post.user_id;
    vm.comments = res.data.post.comments;
    return vm.userId;
  });

  let id = $stateParams.id;

  function deletePost (userId) {
    UserService.checkFileAuth();
    UserPageService.deletePost(id).then( (res) => {
      $state.go('root2.userhome', {id: userId});
    });
  }

  function addComment (commentObj) {
    UserService.checkAuth();
    ProjectService.postComment(commentObj, id).then( (res) => {
      $state.reload();
    });
  }

  function getComments () {
    console.log('i want to see comments');
  }

};

SinglePostController.$inject = ['$state', '$stateParams', 'UserService', 'ProfileService', 'ProjectService', 'UserPageService'];

export default SinglePostController;