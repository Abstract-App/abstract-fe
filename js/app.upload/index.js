import angular from 'angular';

import '../app.core/index';
import '../app.user/index';

import ImageController from './controllers/imagecontroller';
import TextController from './controllers/textcontroller';

import PostService from './services/postservice';

angular
  .module('app.upload', ['app.core', 'app.user'])
  .controller('ImageController', ImageController)
  .controller('TextController', TextController)
  .service('PostService', PostService)
;