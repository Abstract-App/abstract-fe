import angular from 'angular';

import '../app.core/index';
import '../app.user/index';

import fileUpload from './directives/uploaddirective';

angular
  .module('app.layout', ['app.core', 'app.user'])
  .directive('fileUpload', fileUpload)
;