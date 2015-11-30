let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root2', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout2.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/app-projects/splash.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/app-user/register.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/app-user/login.tpl.html'
    })
    .state('root2.upload', {
      url: '/upload',
      templateUrl: 'templates/app-upload/upload.tpl.html'
    });
  

};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export default config;