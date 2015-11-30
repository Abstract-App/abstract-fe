let UploadService = function() {

  this.getForm = getForm;

  function getForm (element) {
    element.on('click', function () {
      element.find('div').removeClass('hidden');
    });
  }
  
};

UploadService.$inject = [];

export default UploadService;