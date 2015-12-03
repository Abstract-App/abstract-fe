let ProfileService = function($http, UserService, FILESERVER) {

  let url = FILESERVER.URL;

  this.upload = upload;
  this.uploadForm = uploadForm;

  function upload (file) {
    console.log(file);
    return file;
  }

  function uploadForm (profile) {
    console.log(profile);
  }




   
};

ProfileService.$inject = ['$http', 'UserService', 'FILESERVER'];

export default ProfileService;