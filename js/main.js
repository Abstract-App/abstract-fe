import angular from 'angular';
import 'angular-ui-router';

import './app.core/index';
import './app.upload/index';

angular
  .module('app', ['app.core', 'app.upload'])
;