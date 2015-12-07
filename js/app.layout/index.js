import angular from 'angular';

import '../app.core/index';
import '../app.user/index';
import '../app.upload/index';
import '../app.projects/index';

import fileUpload from './directives/uploaddirective';
import imageUpload from './directives/postdirective';
import userTile from './directives/usertilesdirective';
import splashTiles from './directives/splashdirective';
import splashTxt from './directives/splashtextdirective';

angular
  .module('app.layout', ['app.core', 'app.user', 'app.upload', 'app.projects'])
  .directive('fileUpload', fileUpload)
  .directive('imageUpload', imageUpload)
  .directive('userTile', userTile)
  .directive('splashTiles', splashTiles)
  .directive('splashTxt', splashTxt)
;