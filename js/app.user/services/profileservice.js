let ProfileService = function($http, FILESERVER) {
  
  let url = FILESERVER.URL;

  this.upload = upload;

  function upload (file) {
    let formData = new FormData();
    formData.append('picture', file);

    return $http.post(url + 'profile', formData, FILESERVER.CONFIG);
  }

};

ProfileService.$inject = ['$http', 'FILESERVER'];

export default ProfileService;