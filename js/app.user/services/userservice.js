let UserService = function($http, SERVER, $cookies, $state, FILESERVER) {

  console.log(SERVER);
  
  let url = SERVER.URL;

  this.register = register;
  this.login = login;
  this.logout = logout;
  this.userSuccess = userSuccess;
  this.checkAuth = checkAuth;
  this.checkFileAuth = checkFileAuth;

  let User = function (userObj) {
    this.firstname = userObj.firstname;
    this.lastname = userObj.lastname;
    this.email = userObj.email;
    this.username = userObj.username;
    this.password = userObj.password;
  };

  function register (userObj) {
    let user = new User(userObj);
    return $http.post(url + 'register', user, SERVER.CONFIG);
  }

  function login (user) {
    return $http.post(url + 'login', user, SERVER.CONFIG);
  }

  function logout () {
    $cookies.remove('Auth-Token');
    SERVER.CONFIG.headers.auth_token = null;
    console.log('logged out');
    $state.go('root.home');
  }

  function userSuccess (res) {
    $cookies.put('Auth-Token', res.data.user.auth_token);
    $cookies.put('id', res.data.user.id);
    SERVER.CONFIG.headers.auth_token = res.data.user.auth_token;
    SERVER.CONFIG.headers.id = res.data.user.id;
  }

  function checkAuth () {
    let token = $cookies.get('Auth-Token');

    if (token) {
      SERVER.CONFIG.headers.auth_token = token;
    } else {
      $state.go('root.home');
    }

    // console.log(token);
  }

  function checkFileAuth () {
    let token = $cookies.get('Auth-Token');

    if (token) {
      FILESERVER.CONFIG.headers.auth_token = token;
    } else {
      $state.go('root.home');
    }
  }

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state', 'FILESERVER'];

export default UserService;