let ImageController = function(UploadService) {

  let vm = this;

  vm.getForm = getForm;
  
  function getForm (element) {
    element.on('click', function () {
      element.find('div').removeClass('hidden');
    });
  }

};

ImageController.$inject = ['UploadService'];

export default ImageController;