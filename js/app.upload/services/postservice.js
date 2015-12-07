let PostService = function($http, FILESERVER, SERVER, UserService) {

  let url = FILESERVER.URL;

  this.addImage = addImage;
  this.postForm = postForm;
  this.postText = postText;
  this.postLink = postLink;
  this.postQuote = postQuote;

  function addImage (file) {
    console.log(file);
    return file;
  }

  function postForm (image) {
    console.log(image);

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

  
};

PostService.$inject = ['$http', 'FILESERVER', 'SERVER', 'UserService'];

export default PostService;