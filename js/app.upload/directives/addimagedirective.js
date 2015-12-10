let addImage = function(PostService, $state) {
  
  return {

    restrict: 'EA',
    replace: true,
    scope: {
      mood: '=',
    },
    templateUrl: 'templates/app-upload/mood/moodform.tpl.html',
    link: function (scope, element, attrs) {
      element.on('submit', function () {
        let image = element.find('input')[0].files[0];
        let divId = attrs.mood;
        let postId = attrs.id;
        PostService.postMood(image, divId, postId).then( (res) => {
          $state.reload();
        });
      });
    }
  };

};

addImage.$inject = ['PostService', '$state'];

export default addImage;