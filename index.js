const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

//MIDDLEWARES
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
//=================

//ROUTES
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
//=============


//This code runs for routes not specified in server side of the app (Basically the react routes)

if(process.env.NODE_ENV === 'production') {
	//Express will serve up the production build assets
	app.use(express.static('client/build'));

	//Express will serve up the index.html if it doesn't recognize the routes
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
//==================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server started!');
});