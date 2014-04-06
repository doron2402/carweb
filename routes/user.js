
/*
 * GET users listing.
 */
var User = {};

//Authenticate user
User.auth = function(req, res, next) {

};

//User signup - create a mongodb record for the user
User.register = function(req, res, next) {

};

//Send an email to the user to change password
User.forgotPassword = function(req, res, next) {

};

//change user from active to non-active
User.cancel = function(req, res, next) {

};

//Login the user - add session
User.login = function(req, res, next) {

};

//Logout user - delete session
User.logout = function(req, res, next) {

};

export.module = User;