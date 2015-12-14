let MoodController = function(UserPageService, PostService, UserService, $state, $stateParams) {
  
  let vm = this;

  vm.selectMood1 = selectMood1;
  vm.selectMood2 = selectMood2;
  vm.selectMood3 = selectMood3;
  vm.selectMood4 = selectMood4;
  vm.selectMood5 = selectMood5;

  vm.showForm1 = showForm1;
  vm.showForm2 = showForm2;
  vm.showForm3 = showForm3;
  vm.showForm4 = showForm4;
  vm.showForm5 = showForm5;
  vm.showForm6 = showForm6;

  vm.deletePost = deletePost;

  vm.postId = $stateParams.id;

  UserService.checkFileAuth();

  PostService.getMood(vm.postId).then( (res) => {
    vm.moodPieces = res.data.post.moodpieces;
    // angular.forEach(moodPieces, function (piece) {
    //   vm.pieceImg = piece.image;
    //   vm.pieceClass = piece.div_id;
    //   console.log(vm.pieceImg, vm.pieceClass);
    // });
    // console.log(vm.moodPieces);
  });

  // select mood template + create initial moodboard

  function selectMood1 () {
    PostService.selectMood1().then( (res) => {
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp1', {id: moodId});
    });
  }

  function selectMood2 () {
    PostService.selectMood2().then( (res) => {
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp2', {id: moodId});
    });
  }

  function selectMood3 () {
    PostService.selectMood3().then( (res) => {
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp3', {id: moodId});
    });
  }

  function selectMood4 () {
    PostService.selectMood4().then( (res) => {
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp4', {id: moodId});
    });
  }

  function selectMood5 () {
    PostService.selectMood5().then( (res) => {
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp5', {id: moodId});
    });
  }

  // forms pop up for each box in moodboard template

  function showForm1 () {
    console.log('showing 1');
  }
  function showForm2 () {
    console.log('showing 2');
  }
  function showForm3 () {
    console.log('showing 3');
  }
  function showForm4 () {
    console.log('showing 4');
  }
  function showForm5 () {
    console.log('showing 5');
  }
  function showForm6 () {
    console.log('showing 6');
  }

  let id = $stateParams.id;

  function deletePost (userId) {
    UserService.checkFileAuth();
    UserPageService.deletePost(id).then( (res) => {
      $state.go('root2.userhome', {id: userId});
    });
  }

};

MoodController.$inject = ['UserPageService', 'PostService', 'UserService', '$state', '$stateParams'];

export default MoodController;