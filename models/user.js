const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	middleName: {
		type: String,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	password2: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('user', User);
