let splashTxt = function($state, ProjectService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/hometxttiles.tpl.html',
    link: function (scope, element, attrs) {
      // if(scope.tile.post_type !== 'image') {
      //   element.remove();
      // }
      element.on('click', function () {
        $state.go('root2.singlepost', {
          id: scope.tile.id
        });
      });
    } 
  };
  

};

splashTxt.$inject = ['$state', 'ProjectService'];

export default splashTxt;