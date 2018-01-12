module.exports = function(app){

		// Our model controllers (rather than routes)
		var application_controller = require('./controllers/application_controller');
		var users_controller = require('./controllers/users_controller');
		var profile_controller = require('./controllers/profile_controller');
		
		app.use('/', application_controller);
		app.use('/users', users_controller);
		app.use('/profile', profile_controller);

}