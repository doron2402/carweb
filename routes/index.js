
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.UserRoute = require('./user');
exports.CarRoute = require('./car');