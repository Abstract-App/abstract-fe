import angular from 'angular';

import '../app.core/index';

import UserService from './services/userservice';

import LoginController from './controllers/logincontroller';
import RegisterController from './controllers/registercontroller';

angular
  .module('app.user', ['app.core'])
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService)
;