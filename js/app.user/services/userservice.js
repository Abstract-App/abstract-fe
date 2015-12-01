let UserService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);
  
  let url = SERVER.URL;

  this.register = register;
  this.login = login;
  this.userSuccess = userSuccess;

  let User = function (userObj) {
    this.firstname = userObj.firstname;
    this.lastname = userObj.lastname;
    this.email = userObj.email;
    this.username = userObj.username;
    this.password = userObj.password;
  };

  function register (userObj) {
    let user = new User(userObj);
    return $http.post(url + 'signup', user, SERVER.CONFIG);
  }

  function login (user) {
    return $http.post(url + 'signin', user, SERVER.CONFIG);
  }

  function userSuccess (res) {
    $cookies.put('Auth-Token', res.data.auth_token);
    SERVER.CONFIG.headers.auth_token = res.data.auth_token;
    $state.go('root.home');
  }

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;