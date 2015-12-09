let splashTiles = function ($state, ProjectService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/hometiles.tpl.html',
    controller: 'ExploreController as vm',
    link: function (scope, element, attrs) {
      // element.on('click', function () {
      //   $state.go('root2.singlepost', {
      //     id: scope.tile.post.id
      //   });
      // });   
    } 
  };
  

};

splashTiles.$inject = ['$state', 'ProjectService'];

export default splashTiles;