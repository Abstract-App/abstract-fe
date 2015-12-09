let userQtetile = function($state, UserPageService, ProjectService) {
  
  return {
    restrict: 'AE',
    scope: {
      post: "=post"
    },
    templateUrl: 'templates/app-profile/userqtetiles.tpl.html',
    controller: 'UserPageController as vm',
    link: function (scope, element, attrs) {
      // element.on('click', function () {
      //   $state.go('root2.singlepost', {
      //     id: scope.post.post.id
      //   });
      // });
    }
  };

};

userQtetile.$inject = ['$state', 'UserPageService', 'ProjectService'];

export default userQtetile;