let userTile = function($state, UserPageService, ProjectService) {
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      post: "=post"
    },
    templateUrl: 'templates/app-profile/usertiles.tpl.html',
    controller: 'UserPageController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root2.singlepost', {
          id: scope.post.id
        });
      });
    }
  };

};

userTile.$inject = ['$state', 'UserPageService', 'ProjectService'];

export default userTile;