let MoodController = function(PostService, UserService, $state, $stateParams) {
  
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

  vm.postId = $stateParams.id;

  UserService.checkFileAuth();

  PostService.getMood(vm.postId).then( (res) => {
    console.log(res.data.post.moodpieces);
    console.log(res);
    vm.moodPieces = res.data.post.moodpieces;
    // angular.forEach(moodPieces, function (piece) {
    //   vm.pieceImg = piece.image;
    //   vm.pieceClass = piece.div_id;
    //   console.log(vm.pieceImg, vm.pieceClass);
    // });
  });

  // select mood template + create initial moodboard

  function selectMood1 () {
    console.log('i want this mood!');
    PostService.selectMood().then( (res) => {
      console.log(res);
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp1', {id: moodId});
    });
  }

  function selectMood2 () {
    console.log('i want this mood!');
    PostService.selectMood().then( (res) => {
      console.log(res);
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp2', {id: moodId});
    });
  }

  function selectMood3 () {
    console.log('i want this mood!');
    PostService.selectMood().then( (res) => {
      console.log(res);
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp3', {id: moodId});
    });
  }

  function selectMood4 () {
    console.log('i want this mood!');
    PostService.selectMood().then( (res) => {
      console.log(res);
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp4', {id: moodId});
    });
  }

  function selectMood5 () {
    console.log('i want this mood!');
    PostService.selectMood().then( (res) => {
      console.log(res);
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp5', {id: moodId});
    });
  }

  // forms pop up for each box in moodboard template

  function showForm1 () {
    vm.showImageUpload1 = (vm.showImageUpload1 || vm.showImageUpload2 || vm.showImageUpload3 || vm.showImageUpload4 || vm.showImageUpload5 || vm.showImageUpload6) ? false : true;
    console.log('showing 1');
  }
  function showForm2 () {
    vm.showImageUpload2 = (vm.showImageUpload1 || vm.showImageUpload2 || vm.showImageUpload3 || vm.showImageUpload4 || vm.showImageUpload5 || vm.showImageUpload6) ? false : true;
    console.log('showing 2');
  }
  function showForm3 () {
    vm.showImageUpload3 = (vm.showImageUpload1 || vm.showImageUpload2 || vm.showImageUpload3 || vm.showImageUpload4 || vm.showImageUpload5 || vm.showImageUpload6) ? false : true;
    console.log('showing 3');
  }
  function showForm4 () {
    vm.showImageUpload4 = (vm.showImageUpload1 || vm.showImageUpload2 || vm.showImageUpload3 || vm.showImageUpload4 || vm.showImageUpload5 || vm.showImageUpload6) ? false : true;
    console.log('showing 4');
  }
  function showForm5 () {
    vm.showImageUpload5 = (vm.showImageUpload1 || vm.showImageUpload2 || vm.showImageUpload3 || vm.showImageUpload4 || vm.showImageUpload5 || vm.showImageUpload6) ? false : true;
    console.log('showing 5');
  }
  function showForm6 () {
    vm.showImageUpload6 = (vm.showImageUpload1 || vm.showImageUpload2 || vm.showImageUpload3 || vm.showImageUpload4 || vm.showImageUpload5 || vm.showImageUpload6) ? false : true;
    console.log('showing 6');
  }

};

MoodController.$inject = ['PostService', 'UserService', '$state', '$stateParams'];

export default MoodController;