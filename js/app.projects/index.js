import angular from 'angular';

import '../app.core/index';
import '../app.layout/index';

import HomeController from './controllers/HomeController';

import ProjectService from './services/projectservice';

angular
  .module('app.projects', ['app.core', 'app.layout'])
  .controller('HomeController', HomeController)
  .service('ProjectService', ProjectService)
;