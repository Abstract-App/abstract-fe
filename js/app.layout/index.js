import angular from 'angular';

import '../app.core/index';
import '../app.user/index';
import '../app.upload/index';

import fileUpload from './directives/uploaddirective';
import imageUpload from './directives/postdirective';

angular
  .module('app.layout', ['app.core', 'app.user', 'app.upload'])
  .directive('fileUpload', fileUpload)
  .directive('imageUpload', imageUpload)
;