import angular from 'angular';
import 'angular-ui-router';

import './app.core/index';
import './app.user/index';
import './app.layout/index';

angular
  .module('app', ['app.core', 'app.user', 'app.layout'])
;