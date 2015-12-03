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
    UserService.checkAuth();
    return $http.post(FILESERVER.URL + 'profiles', profile, FILESERVER.CONFIG);
  }
   
};

ProfileService.$inject = ['$http', 'UserService', 'FILESERVER'];

export default ProfileService;