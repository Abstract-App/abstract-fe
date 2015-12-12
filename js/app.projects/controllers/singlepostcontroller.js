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
    vm.postId = res.data.post.id;
    vm.comments = res.data.post.comments;
    console.log(vm.post);
    return [vm.userId, vm.postId];
  });

  let id = $stateParams.id;

  function editImagePost (image, postId) {
    UserService.checkFileAuth();
    UserPageService.editImagePost(image, postId).then( (res) => {
      $state.go('root2.imageview', {id: postId});
    });
  }
  function editQuotePost (quote, postId) {
    UserService.checkAuth();
    UserPageService.editQuotePost(quote, postId).then( (res) => {
      $state.go('root2.quoteview', {id: postId});
    });
  }
  function editTextPost (text, postId) {
    UserService.checkAuth();
    UserPageService.editTextPost(text, postId).then( (res) => {
      $state.go('root2.textview', {id: postId});
    });
  }
  function editUrlPost (link, postId) {
    UserService.checkAuth();
    UserPageService.editUrlPost(link, postId).then( (res) => {
      $state.go('root2.urlview', {id: postId});
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