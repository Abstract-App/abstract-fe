let splashTxt = function($state, ProjectService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      tile: "="
    },
    templateUrl: 'templates/app-layout/hometxttiles.tpl.html',
    link: function (scope, element, attrs) {
      // element.on('click', function () {
      //   $state.go('root2.singlepost', {
      //     id: scope.tile.post.id
      //   });
      // });
    } 
  };
  

};

splashTxt.$inject = ['$state', 'ProjectService'];

export default splashTxt;