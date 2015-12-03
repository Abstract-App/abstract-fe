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
        console.log('submitted');
        let file = element.find('input')[0].files[0];
        scope.file = file;
        ProfileService.upload(file);
      });
    }
  };
  
};

fileUpload.$inject = ['ProfileService'];

export default fileUpload;

// let fileUpload = function(ProfileService) {
  
//   return {
//     restrict: 'AE',
//     link: function (scope, element, attrs) {
//       element.on('change', function () {
//         let file = element.find('input')[0].files[0];
//         console.log('image added');
//         console.log(file);
//         return file;
//       });
//     }
//   };
  

// };

// fileUpload.$inject = ['ProfileService'];

// export default fileUpload;