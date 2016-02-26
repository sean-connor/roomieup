var userUtils = require('../util/userUtil.js');

var userActions = {
  create: function(user) {
    userUtils.createUser(user);
  }
};

module.exports = userActions;
