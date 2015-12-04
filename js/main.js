import angular from 'angular';
import 'angular-ui-router';

import './app.core/index';
import './app.user/index';
import './app.layout/index';
import './app.upload/index';
import './app.profile/index';
import './app.projects/index';

angular
  .module('app', ['app.core', 'app.user', 'app.layout', 'app.upload', 'app.profile', 'app.projects'])
;