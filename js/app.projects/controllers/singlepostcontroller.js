let SinglePostController = function($state, $stateParams, UserService, ProfileService, ProjectService, UserPageService) {
  
  let vm = this;

  vm.editImagePost = editImagePost;
  vm.editQuotePost = editQuotePost;
  vm.editTextPost = editTextPost;
  vm.editUrlPost = editUrlPost;
  vm.deletePost = deletePost;
  vm.addComment = addComment;

  ProjectService.getPost($stateParams.id).then( (res) => {
    vm.post = res.data.post;
    vm.userId = res.data.post.user_id;
    vm.comments = res.data.post.comments;
    return vm.userId;
  });

  let id = $stateParams.id;

  function editImagePost (id) {
    UserService.checkFileAuth();
    UserPageService.editPost(id).then( (res) => {
      $state.go('root2.imageview', {id: id});
    });
  }
  function editQuotePost (id) {
    UserService.checkFileAuth();
    UserPageService.editPost(id).then( (res) => {
      $state.go('root2.quoteview', {id: id});
    });
  }
  function editTextPost (id) {
    UserService.checkFileAuth();
    UserPageService.editPost(id).then( (res) => {
      $state.go('root2.textview', {id: id});
    });
  }
  function editUrlPost (id) {
    UserService.checkFileAuth();
    UserPageService.editPost(id).then( (res) => {
      $state.go('root2.urlview', {id: id});
    });
  }

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