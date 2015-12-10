let MoodController = function(PostService, UserService, $state) {
  
  let vm = this;

  vm.selectMood = selectMood;

  vm.showForm1 = showForm1;
  vm.showForm2 = showForm2;
  vm.showForm3 = showForm3;
  vm.showForm4 = showForm4;
  vm.showForm5 = showForm5;
  vm.showForm6 = showForm6;

  UserService.checkFileAuth();

  function selectMood () {
    console.log('i want this mood!');
    PostService.selectMood().then( (res) => {
      console.log(res);
      let moodId = res.data.post.id;
      $state.go('root2.moodtemp1', {id: moodId});
    });
  }

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

MoodController.$inject = ['PostService', 'UserService', '$state'];

export default MoodController;