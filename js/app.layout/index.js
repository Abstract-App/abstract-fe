import angular from 'angular';

import '../app.core/index';

import fileUpload from './directives/uploaddirective';

angular
  .module('app.layout', ['app.core'])
  .directive('fileUpload', fileUpload)
;