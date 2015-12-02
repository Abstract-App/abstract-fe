let ProfileService = function($http, UserService, FILESERVER) {

  let url = FILESERVER.URL;

  this.upload = upload;
  this.uploadForm = uploadForm;


  function upload (file) {
    console.log(file);
    return file;
  }

  function uploadForm (profile, file) {
    console.log(profile);
    console.log(file);
  }




   
};

ProfileService.$inject = ['$http', 'UserService', 'FILESERVER'];

export default ProfileService;