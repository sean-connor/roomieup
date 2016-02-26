var SessionUtil = require('./sessionUtil');

module.exports = {
  checkSession: function () {
      if (this.loggedIn()) {
        SessionUtil.checkSession(this.getToken());
      }
    },

  getToken: function () {
    return localStorage.token
  },

  loggedIn: function () {
    if(localStorage.token==="undefined"){
      return false;
    } else {
      return !!localStorage.token
    }
  }
}
