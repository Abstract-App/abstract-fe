import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import SERVER from './constants/serverconstant';

angular
  .module('app.core', ['ui.router'])
  .constant(SERVER, 'SERVER')
  .config(config)
;