let ProfileService = function($http, FILESERVER) {
  
  let url = FILESERVER.URL;

  this.upload = upload;

  function upload (profileObj) {

    let formData = new FormData();

    formData.append('file', profileObj);
    formData.append('bio', profileObj);
    formData.append('website', profileObj);
    formData.append('location', profileObj);

    return $http.post(url + 'profiles', formData, FILESERVER.CONFIG);
  }

};

ProfileService.$inject = ['$http', 'FILESERVER'];

export default ProfileService;