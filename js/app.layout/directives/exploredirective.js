let exploreTiles = function ($state, ProjectService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/exploretiles.tpl.html',
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

exploreTiles.$inject = ['$state', 'ProjectService'];

export default exploreTiles;