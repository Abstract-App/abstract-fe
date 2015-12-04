let userTile = function($state, UserPageService) {
  
  return {
    restrict: 'AE',
    // replace: true,
    scope: {
      post: "=post"
    },
    template: `
      <div class="user-tile" ng-click="vm.clicked(post)">
        <h3>{{ post.title }}</h3>
        <h3>{{ post.post_type }}</h3>
      </div>
    `,
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