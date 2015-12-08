let splashTiles = function ($state, ProjectService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/hometiles.tpl.html',
    link: function (scope, element, attrs) {
      element.find('img', function () {
        this.element.on('click', function () {
          $state.go('root2.singlepost', {
            id: scope.tile.id
          });
        });   
      });
    } 
  };
  

};

splashTiles.$inject = ['$state', 'ProjectService'];

export default splashTiles;