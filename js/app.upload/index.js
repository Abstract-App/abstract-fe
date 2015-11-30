import angular from 'angular';

import '../app.core/index';

import ImageController from './controllers/imagecontroller';

import UploadService from './services/uploadservice';

angular
  .module('app.upload', ['app.core'])
  .controller('ImageController', ImageController)
  .service('UploadService', UploadService)
;