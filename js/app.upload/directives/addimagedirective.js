let addImage = function(PostService) {
  
  return {

    restrict: 'E',
    replace: true,
    scope: {
      mood: '='
    },
    templateUrl: 'templates/app-upload/mood/moodform.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {

        let file = element.find('input')[0].files[0];
        PostService.upload(file).then( (res) => {
          CarService.addImage(res.data.upload.file_url, scope.car)
            .then( (res) => {
              
            });
        });

      });
    }
  };

};

addImage.$inject = ['PostService'];

export default addImage;