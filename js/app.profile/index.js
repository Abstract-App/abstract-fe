import angular from 'angular';
import 'angular-cookies';

import '../app.core/index';
import '../app.layout/index';

import UserPageService from './services/userpageservice';

import UserPageController from './controllers/userpagecontroller';
import OtherUserController from './controllers/otherusercontroller';

angular
  .module('app.profile', ['app.core', 'app.layout', 'ngCookies'])
  .controller('UserPageController', UserPageController)
  .controller('OtherUserController', OtherUserController)
  .service('UserPageService', UserPageService)
;