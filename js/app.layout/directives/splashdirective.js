let splashTiles = function ($state, ProjectService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/hometiles.tpl.html',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        console.log(scope.tile.post.id);
        $state.go('root2.singlepost', {
          id: scope.tile.post.id
        });
      });   
    } 
  };
  

};

splashTiles.$inject = ['$state', 'ProjectService'];

export default splashTiles;