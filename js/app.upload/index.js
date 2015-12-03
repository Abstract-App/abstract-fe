import angular from 'angular';

import '../app.core/index';
import '../app.user/index';

import ImageController from './controllers/imagecontroller';

import PostService from './services/postservice';

angular
  .module('app.upload', ['app.core', 'app.user'])
  .controller('ImageController', ImageController)
  .service('PostService', PostService)
;