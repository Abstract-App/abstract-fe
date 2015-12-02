let fileUpload = function(UploadService) {

  return {

    restrict: 'AE',
    replace: true,
    scope: {
      image: '=image'
    },
    templateUrl: 'templates/app-layout/fileupload.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {
        console.log('submitted');
        let file = element.find('input')[0].files[0];
        UploadService.upload(file).then( (res) => {
          console.log(res);
        });
      });
    }
  };
  
  

};

fileUpload.$inject = ['UploadService'];

export default fileUpload;