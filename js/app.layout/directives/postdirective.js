let imageUpload = function(PostService) {
  
  return {

    restrict: 'E',
    replace: true,
    scope: {
      file: '='
    },
    templateUrl: 'templates/app-layout/photoupload.tpl.html',
    link: function (scope, element, attrs) {
      element.on('change', function () {
        console.log('image is here');
        let file = element.find('input')[0].files[0];
        scope.file = file;
        PostService.addImage(file);
      });
    }
  };

};

imageUpload.$inject = ['PostService'];

export default imageUpload;