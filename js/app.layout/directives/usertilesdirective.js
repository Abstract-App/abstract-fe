let userTile = function($state, UserPageService) {
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      post: "=post"
    },
    templateUrl: 'templates/app-profile/usertiles.tpl.html',
    controller: 'UserPageController as vm',
    // link: function (scope, element, attrs) {
    //   element.on('click', function () {
    //     $state.go('root.singleArt', {
    //       id: scope.art.objectId
    //     });
    //   });
    // }
  };

};

userTile.$inject = ['$state', 'UserPageService'];

export default userTile;