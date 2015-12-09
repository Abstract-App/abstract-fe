let MoodController = function(PostService, UserService) {
  
  let vm = this;

  vm.showForm1 = showForm1;
  vm.showForm2 = showForm2;
  vm.showForm3 = showForm3;
  vm.showForm4 = showForm4;
  vm.showForm5 = showForm5;
  vm.showForm6 = showForm6;
  vm.showImageUpload1 = false;
  vm.showImageUpload2 = false;
  vm.showImageUpload3 = false;
  vm.showImageUpload4 = false;
  vm.showImageUpload5 = false;
  vm.showImageUpload6 = false;

  UserService.checkFileAuth();

  function showForm1 () {
    vm.showImageUpload1 = (vm.showImageUpload1) ? false : true;
  }
  function showForm2 () {
    vm.showImageUpload2 = (vm.showImageUpload2) ? false : true;
  }
  function showForm3 () {
    vm.showImageUpload3 = (vm.showImageUpload3) ? false : true;
  }
  function showForm4 () {
    vm.showImageUpload4 = (vm.showImageUpload4) ? false : true;
  }
  function showForm5 () {
    vm.showImageUpload5 = (vm.showImageUpload5) ? false : true;
  }
  function showForm6 () {
    vm.showImageUpload6 = (vm.showImageUpload6) ? false : true;
  }

};

MoodController.$inject = ['PostService', 'UserService'];

export default MoodController;