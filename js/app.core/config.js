let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root2', {
      abstract: true,
      controller: 'UsernavController as vm',
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
      controller: 'UploadPageController as vm',
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
    .state('mood', {
      parent: 'root2.upload',
      url: '/mood',
      controller: 'MoodController as vm',
      templateUrl: 'templates/app-upload/moodupload.tpl.html'
    })
    .state('root2.moodtemp1', {
      url: '/mood/temp1/:id',
      controller: 'MoodController as vm',
      templateUrl: 'templates/app-upload/mood/temp1.tpl.html'
    })
    .state('root2.moodtemp2', {
      url: '/mood/temp2',
      controller: 'MoodController as vm',
      templateUrl: 'templates/app-upload/mood/temp2.tpl.html'
    })
    .state('root2.moodtemp3', {
      url: '/mood/temp3',
      controller: 'MoodController as vm',
      templateUrl: 'templates/app-upload/mood/temp3.tpl.html'
    })
    .state('root2.moodtemp4', {
      url: '/mood/temp4',
      controller: 'MoodController as vm',
      templateUrl: 'templates/app-upload/mood/temp4.tpl.html'
    })
    .state('root2.moodtemp5', {
      url: '/mood/temp5',
      controller: 'MoodController as vm',
      templateUrl: 'templates/app-upload/mood/temp5.tpl.html'
    })
    .state('root2.userhome', {
      url: '/userhome',
      controller:  'UserPageController as vm',
      templateUrl: 'templates/app-profile/profile.tpl.html'
    })
    .state('root2.user', {
      url: '/user/:id',
      controller: 'UserPageController as vm',
      templateUrl: 'templates/app-profile/profile.tpl.html'
    })
    .state('root2.imageview', {
      url: '/image/:id',
      controller: 'SinglePostController as vm',
      templateUrl: 'templates/app-projects/singleviews/image.tpl.html'
    })
    .state('root2.textview', {
      url: '/text/:id',
      controller: 'SinglePostController as vm',
      templateUrl: 'templates/app-projects/singleviews/text.tpl.html'
    })
    .state('root2.quoteview', {
      url: '/quote/:id',
      controller: 'SinglePostController as vm',
      templateUrl: 'templates/app-projects/singleviews/quote.tpl.html'
    })
    .state('root2.urlurlview', {
      url: '/url/:id',
      controller: 'SinglePostController as vm',
      templateUrl: 'templates/app-projects/singleviews/url.tpl.html'
    })
    .state('root2.explore', {
      url: '/explore',
      controller: 'ExploreController as vm',
      templateUrl: 'templates/app-projects/allprojects.tpl.html'
    });
};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export default config;