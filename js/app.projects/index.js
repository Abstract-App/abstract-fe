import angular from 'angular';

import '../app.core/index';
import '../app.layout/index';

import HomeController from './controllers/HomeController';
import SinglePostController from './controllers/SinglePostController';

import ProjectService from './services/projectservice';

angular
  .module('app.projects', ['app.core', 'app.layout'])
  .controller('HomeController', HomeController)
  .controller('SinglePostController', SinglePostController)
  .service('ProjectService', ProjectService)
;