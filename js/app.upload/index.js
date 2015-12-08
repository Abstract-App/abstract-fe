import angular from 'angular';

import '../app.core/index';
import '../app.user/index';

import ImageController from './controllers/imagecontroller';
import TextController from './controllers/textcontroller';
import LinkController from './controllers/linkcontroller';
import QuoteController from './controllers/quotecontroller';
import UploadPageController from './controllers/uploadpagecontroller';
import MoodController from './controllers/moodcontroller';

import PostService from './services/postservice';

angular
  .module('app.upload', ['app.core', 'app.user'])
  .controller('ImageController', ImageController)
  .controller('TextController', TextController)
  .controller('LinkController', LinkController)
  .controller('QuoteController', QuoteController)
  .controller('UploadPageController', UploadPageController)
  .controller('MoodController', MoodController)
  .service('PostService', PostService)
;