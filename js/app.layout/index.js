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
import userMoodtile1 from './directives/usermoodtiles1';
import userMoodtile2 from './directives/usermoodtiles2';
import userMoodtile3 from './directives/usermoodtiles3';
import userMoodtile4 from './directives/usermoodtiles4';
import userMoodtile5 from './directives/usermoodtiles5';

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
  .directive('userMoodtile1', userMoodtile1)
  .directive('userMoodtile2', userMoodtile2)
  .directive('userMoodtile3', userMoodtile3)
  .directive('userMoodtile4', userMoodtile4)
  .directive('userMoodtile5', userMoodtile5)
  .controller('UsernavController', UsernavController)
;