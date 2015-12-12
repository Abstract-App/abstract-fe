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
import exploreTiles from './directives/exploredirective';
import exploreTxt from './directives/exploretxtdirective';
import userTxttile from './directives/usertxttiles';
import userQtetile from './directives/userqtetiles';
import userUrltile from './directives/userurltiles';
import userMoodtile from './directives/usermoodtiles';

import UsernavController from './controllers/usernavcontroller';

angular
  .module('app.layout', ['app.core', 'app.user', 'app.upload', 'app.projects'])
  .directive('fileUpload', fileUpload)
  .directive('imageUpload', imageUpload)
  .directive('userTile', userTile)
  .directive('splashTiles', splashTiles)
  .directive('splashTxt', splashTxt)
  .directive('exploreTiles', exploreTiles)
  .directive('exploreTxt', exploreTxt)
  .directive('userTxttile', userTxttile)
  .directive('userQtetile', userQtetile)
  .directive('userUrltile', userUrltile)
  .directive('userMoodtile', userMoodtile)
  .controller('UsernavController', UsernavController)
;