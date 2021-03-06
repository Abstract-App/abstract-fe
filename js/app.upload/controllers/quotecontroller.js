let QuoteController = function(PostService, UserService, $state) {
  
  let vm = this;

  vm.uploadQuotePost = uploadQuotePost;

  function uploadQuotePost (quote) {
    UserService.checkAuth();
    PostService.postQuote(quote).then( (res) => {
      let id = res.data.post.user_id;
      $state.go('allposts', {id: id});
    });
  }

};

QuoteController.$inject = ['PostService', 'UserService', '$state'];

export default QuoteController;