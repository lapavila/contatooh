var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {
	paqssport.use(new GitHubStrategy({
		ClientID: 'CLIENT ID',
		clientSecret: 'CLIENT PASSWORD',
		callbackURL: 'REDIRECT URL'
	}, function(accessToken, refreshToken, profile, done) {

	}));
};