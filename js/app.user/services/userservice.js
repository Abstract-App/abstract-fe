let UserService = function($http, SERVER, $cookies, $state) {

  console.log(SERVER);
  
  let url = SERVER.URL;

  this.register = register;
  this.login = login;
  this.logout = logout;
  this.userSuccess = userSuccess;
  this.checkAuth = checkAuth;

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

  function logout () {
    $cookies.remove('Auth-Token');
    SERVER.CONFIG.headers.auth_token = null;
    console.log('logged out');
    $state.go('root.home');
  }

  function userSuccess (res) {
    $cookies.put('Auth-Token', res.data.auth_token);
    SERVER.CONFIG.headers.auth_token = res.data.auth_token;
    $state.go('root.home');
  }

  function checkAuth () {
    let token = $cookies.get('Auth-Token');

    if (token) {
      SERVER.CONFIG.headers.auth_token = token;
    } else {
      $state.go('root.home');
    }

    console.log(token);
  }

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;