import ColorThief from '../../colorthief.js';

let SinglePostController = function($element, $cookies, $scope, $state, $stateParams, UserService, ProfileService, ProjectService, UserPageService) {
  
  let vm = this;

  vm.editImagePost = editImagePost;
  vm.editQuotePost = editQuotePost;
  vm.editTextPost = editTextPost;
  vm.editUrlPost = editUrlPost;
  vm.deletePost = deletePost;
  vm.addComment = addComment;
  vm.likePost = likePost;

  ProjectService.getPost($stateParams.id).then( (res) => {
    vm.post = res.data.post;
    vm.userId = res.data.post.user_id;
    vm.postId = res.data.post.id;
    vm.comments = res.data.post.comments;

    if (vm.post.post_type === 'image') {

    //   let image = new Image();
    //   image.src = vm.post.image_large;
    //   image.crossOrigin = "Anonymous";
    //   image.onload = function() {
    //     let colorThief = new ColorThief();
    //     let palette = colorThief.getPalette(image, 8, 8);
    //     console.log(palette);
    // }


      let image = document.querySelector('.img');
      console.log(image);
      image.onload = function() {
        let colorThief = new ColorThief();
        let palette = colorThief.getPalette(image, 8);
        console.log(palette);
      }
      // let colorThief = new ColorThief();

      // vm.pic = $element.find('img');
      // colorThief.getPalette(vm.pic[0], 8);
      // console.log(vm.pic[0]);
    }

    if (Number(vm.userId) === Number($cookies.get('id'))) {
      vm.myPost = true;
    } else {
      vm.myPost = false;
    }

    return [vm.userId, vm.postId, vm.myPost];
  });

  let id = $stateParams.id;

  function editImagePost (postId, title, des, tags) {
    UserService.checkAuth();
    UserPageService.editImagePost(postId, title, des, tags).then( (res) => {
      $state.go('root2.imageview', {id: postId});
    });
  }
  function editQuotePost (postId, post) {
    UserService.checkAuth();
    UserPageService.editQuotePost(postId, post).then( (res) => {
      $state.go('root2.quoteview', {id: postId});
    });
  }
  function editTextPost (postId, post) {
    UserService.checkAuth();
    UserPageService.editTextPost(postId, post).then( (res) => {
      $state.go('root2.textview', {id: postId});
    });
  }
  function editUrlPost (postId, post) {
    UserService.checkAuth();
    UserPageService.editUrlPost(postId, post).then( (res) => {
      $state.go('root2.urlview', {id: postId});
    });
  }

  function deletePost (userId) {
    UserService.checkFileAuth();
    UserPageService.deletePost(id).then( (res) => {
      $state.go('allposts', {id: userId});
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

  function likePost (postId) {
    UserService.checkAuth();
    ProjectService.likePost(postId).then( (res) => {
      ProjectService.getPost(id).then( (res) => {
        vm.post.likes_count = res.data.post.likes_count;
      });
    });
  }

};

SinglePostController.$inject = ['$element','$cookies', '$scope', '$state', '$stateParams', 'UserService', 'ProfileService', 'ProjectService', 'UserPageService'];

export default SinglePostController;