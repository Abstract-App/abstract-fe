import angular from 'angular';
import 'angular-cookies';

import '../app.core/index';

import UserService from './services/userservice';
import ProfileService from './services/profileservice';

import LoginController from './controllers/logincontroller';
import RegisterController from './controllers/registercontroller';
import ProfileController from './controllers/profilecontroller';

angular
  .module('app.user', ['app.core', 'ngCookies'])
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .service('ProfileService', ProfileService)
;