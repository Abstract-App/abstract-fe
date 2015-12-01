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
      controller: 'RegisterController as vm',
      templateUrl: 'templates/app-user/register.tpl.html'
    })
    .state('root2.addprofile', {
      url: '/register/addprofile',
      templateUrl: 'templates/app-user/addprofile.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-user/login.tpl.html'
    })
    .state('root2.upload', {
      url: '/upload',
      templateUrl: 'templates/app-upload/upload.tpl.html'
    });
  

};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export default config;