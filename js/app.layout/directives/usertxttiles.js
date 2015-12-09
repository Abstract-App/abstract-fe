let userTxttile = function($state, UserPageService, ProjectService) {
  
  return {
    restrict: 'AE',
    scope: {
      post: "="
    },
    templateUrl: 'templates/app-profile/usertxttiles.tpl.html',
    controller: 'UserPageController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root2.singlepost', {
          id: scope.post.post.id
        });
      });
    }
  };
  

};

userTxttile.$inject = ['$state', 'UserPageService', 'ProjectService'];

export default userTxttile;