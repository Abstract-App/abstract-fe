let PostService = function($http, FILESERVER, SERVER, UserService) {

  let url = FILESERVER.URL;

  this.addImage = addImage;
  this.postForm = postForm;
  this.postText = postText;
  this.postLink = postLink;
  this.postQuote = postQuote;
  this.selectMood1 = selectMood1;
  this.selectMood2 = selectMood2;
  this.selectMood3 = selectMood3;
  this.selectMood4 = selectMood4;
  this.selectMood5 = selectMood5;
  this.postMood = postMood;
  this.getMood = getMood;

  function addImage (file) {
    return file;
  }

  function postForm (image) {

    UserService.checkFileAuth();

    let formData = new FormData();

    formData.append('post_type', 'image');
    formData.append('image', image.image);
    formData.append('title', image.title);
    formData.append('description', image.description);
    formData.append('tag_phrases', '#' +image.tag_phrases);

    return $http.post(url + 'posts', formData, FILESERVER.CONFIG);
  }

  let Text = function (textObj) {
    this.post_type = 'text';
    this.status = textObj.status;
    this.tag_phrases = '#' + textObj.tag_phrases;
  };

  function postText (textObj) {
    let t = new Text(textObj);
    return $http.post(url + 'posts', t, SERVER.CONFIG);
  }

  let Link = function (linkObj) {
    this.post_type = 'link';
    this.url = linkObj.url;
    this.description = linkObj.description;
    this.tag_phrases = '#' + linkObj.tag_phrases;
  };

  function postLink (linkObj) {
    let l = new Link(linkObj);
    return $http.post(url + 'posts', l, SERVER.CONFIG);
  }

  let Quote = function (quoteObj) {
    this.post_type = 'quote';
    this.quote = quoteObj.quote;
    this.tag_phrases = '#' + quoteObj.tag_phrases;
  };

  function postQuote (quoteObj) {
    let q = new Quote(quoteObj);
    return $http.post(url + 'posts', q, SERVER.CONFIG);
  }

  let Mood1 = function () {
    this.post_type = 'moodboard';
    this.moodboard_css_class = 'temp1';
  };
  let Mood2 = function () {
    this.post_type = 'moodboard';
    this.moodboard_css_class = 'temp2';
  };
  let Mood3 = function () {
    this.post_type = 'moodboard';
    this.moodboard_css_class = 'temp3';
  };
  let Mood4 = function () {
    this.post_type = 'moodboard';
    this.moodboard_css_class = 'temp4';
  };
  let Mood5 = function () {
    this.post_type = 'moodboard';
    this.moodboard_css_class = 'temp5';
  };

  function selectMood1 () {
    let m = new Mood1();
    console.log('mood1 selected and sending');
    return $http.post(url + 'posts', m, SERVER.CONFIG);
  }
  function selectMood2 () {
    let m = new Mood2();
    console.log('mood2 selected and sending');
    return $http.post(url + 'posts', m, SERVER.CONFIG);
  }
  function selectMood3 () {
    let m = new Mood3();
    console.log('mood3 selected and sending');
    return $http.post(url + 'posts', m, SERVER.CONFIG);
  }
  function selectMood4 () {
    let m = new Mood4();
    console.log('mood4 selected and sending');
    return $http.post(url + 'posts', m, SERVER.CONFIG);
  }
  function selectMood5 () {
    let m = new Mood5();
    console.log('mood5 selected and sending');
    return $http.post(url + 'posts', m, SERVER.CONFIG);
  }

  function postMood (image, divId, postId) {
    UserService.checkFileAuth();

    let moodData = new FormData();

    moodData.append('div_id', divId);
    moodData.append('image', image);
    moodData.append('post_id', postId);

    return $http.post(url + 'posts/' + postId + '/moodpieces', moodData, FILESERVER.CONFIG);
  }

  function getMood (postId) {
    return $http.get(url + 'posts/' + postId, FILESERVER.CONFIG);
  }

  
};

PostService.$inject = ['$http', 'FILESERVER', 'SERVER', 'UserService'];

export default PostService;