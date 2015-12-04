let splashTiles = function () {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/hometiles.tpl.html',
    link: function (scope, element, attrs) {
      if(scope.tile.post_type !== 'image') {
        element.remove();
      }
    } 
  };
  

};

splashTiles.$inject = [];

export default splashTiles;