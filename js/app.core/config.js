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
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-projects/splash.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      controller: 'RegisterController as vm',
      templateUrl: 'templates/app-user/register.tpl.html'
    })
    .state('root.addprofile', {
      url: '/register/addprofile',
      controller: 'ProfileController as vm',
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
    })
    .state('image', {
      parent: 'root2.upload',
      url: '/image',
      controller: 'ImageController as vm',
      templateUrl: 'templates/app-upload/imageupload.tpl.html'
    })
    .state('text', {
      parent: 'root2.upload',
      url: '/text',
      controller: 'TextController as vm',
      templateUrl: 'templates/app-upload/textupload.tpl.html'
    })
    .state('link', {
      parent: 'root2.upload',
      url: '/link',
      controller: 'LinkController as vm',
      templateUrl: 'templates/app-upload/linkupload.tpl.html'
    })
    .state('quote', {
      parent: 'root2.upload',
      url: '/quote',
      controller: 'QuoteController as vm',
      templateUrl: 'templates/app-upload/quoteupload.tpl.html'
    })
    .state('root2.mood', {
      url: '/mood',
      templateUrl: 'templates/app-upload/moodupload.tpl.html'
    })
    .state('root2.userhome', {
      url: '/userhome/:id',
      controller:  'UserPageController as vm',
      templateUrl: 'templates/app-profile/profile.tpl.html'
    })
    .state('root2.singlepost', {
      url: '/singlepost/:id',
      controller: 'SinglePostController as vm',
      templateUrl: 'templates/app-projects/singlepost.tpl.html'
    });
};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export default config;