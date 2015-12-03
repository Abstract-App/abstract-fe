let QuoteController = function(PostService, UserService, $state) {
  
  let vm = this;

  vm.uploadQuotePost = uploadQuotePost;

  function uploadQuotePost (quote) {
    UserService.checkFileAuth();
    PostService.postQuote(quote).then( (res) => {
      console.log(res);
      $state.go('root2.userhome');
    });
  }

};

QuoteController.$inject = ['PostService', 'UserService', '$state'];

export default QuoteController;