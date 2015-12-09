let fileUpload = function(ProfileService) {

  return {

    restrict: 'E',
    replace: true,
    scope: {
      file: '='
    },
    templateUrl: 'templates/app-layout/fileupload.tpl.html',
    link: function (scope, element, attrs) {
      element.on('change', function () {
        let file = element.find('input')[0].files[0];
        scope.file = file;
        ProfileService.upload(file);
      });
    }
  };
  
};

fileUpload.$inject = ['ProfileService'];

export default fileUpload;

