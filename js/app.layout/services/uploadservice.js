let UploadService = function($http, FILESERVER) {

  let url = FILESERVER.URL;

  this.upload = upload;

  function upload (file) {
    console.log(file);
    let imageFile = new FormData();
    imageFile.append('upload', file);

    return $http.post(url + 'profiles', imageFile, FILESERVER.CONFIG);
  }
   
};

UploadService.$inject = ['$http', 'FILESERVER'];

export default UploadService;