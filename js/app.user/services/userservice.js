let UserService = function($http, SERVER) {
  
  let url = SERVER.URL;

  this.register = register;
  this.login = login;

  let User = function (userObj) {
    this.firstname = userObj.firstname;
    this.lastname = userObj.lastname;
    this.email = userObj.email;
    this.username = userObj.username;
    this.password = userObj.password;
  };

  function register (userObj) {
    let user = new User(userObj);
    $http.post(url + 'signup', user, SERVER.CONFIG);
  }

  function login (user) {
    $http.post(url + 'signin', user, SERVER.CONFIG);
  }

};

UserService.$inject = ['$http', 'SERVER'];

export default UserService;