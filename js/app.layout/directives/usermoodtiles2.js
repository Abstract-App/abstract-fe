let userMoodtile2 = function($state, UserPageService, ProjectService) {
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      post: "=post"
    },
    templateUrl: 'templates/app-profile/usermoodtiles2.tpl.html',
    // controller: 'UserPageController as vm',
    link: function (scope, element, attrs) {
      // element.on('click', function () {
      //   $state.go('root2.singlepost', {
      //     id: scope.post.post.id
      //   });
      // });
    }
  };

};

userMoodtile2.$inject = ['$state', 'UserPageService', 'ProjectService'];

export default userMoodtile2;