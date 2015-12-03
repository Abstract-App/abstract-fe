let ProfileService = function($http, UserService, FILESERVER) {

  let url = FILESERVER.URL;

  this.upload = upload;
  this.uploadForm = uploadForm;
  this.getUser = getUser;

  function upload (file) {
    console.log(file);
    return file;
  }

  function uploadForm (profile) {
    console.log(profile);
    UserService.checkFileAuth();
    let formData = new FormData();
    
    formData.append('picture', profile.picture);
    formData.append('bio', profile.bio);
    formData.append('website', profile.website);
    formData.append('location', profile.location);

    return $http.post(FILESERVER.URL + 'profiles', formData, FILESERVER.CONFIG);
  }

  function getUser (id) {
    console.log(id);
    UserService.checkFileAuth();
    return $http.get(FILESERVER.URL + 'users/' + id, FILESERVER.CONFIG);
  }
   
};

ProfileService.$inject = ['$http', 'UserService', 'FILESERVER'];

export default ProfileService;