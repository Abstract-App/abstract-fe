import angular from 'angular';

import '../app.core/index';

import fileUpload from './directives/uploaddirective';

import UploadService from './services/uploadservice';

angular
  .module('app.layout', ['app.core'])
  .service('UploadService', UploadService)
  .directive('fileUpload', fileUpload)
;