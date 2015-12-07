let UploadPageController = function(UserService) {

  let vm = this;
  
  UserService.checkAuth();

};

UploadPageController.$inject = ['UserService'];

export default UploadPageController;