const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 15 }
});

mongoose.model('users', userSchema); //This line creates a new collection in database.