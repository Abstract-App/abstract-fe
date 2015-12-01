import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import SERVER from './constants/serverconstant';
import FILESERVER from './constants/fileserverconstant';

angular
  .module('app.core', ['ui.router'])
  .constant('SERVER', SERVER)
  .constant('FILESERVER', FILESERVER)
  .config(config)
;