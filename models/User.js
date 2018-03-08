const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String
});

mongoose.model('users', userSchema); //This line creates a new collection in database.