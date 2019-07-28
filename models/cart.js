const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		refer: 'user',
	},
	product: {
		type: mongoose.Schema.Types.ObjectId,
		refer: 'catalog',
	},
	streetAddress: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	zipcode: {
		type: Number,
		required: true,
	},
	cellnumber: {
		type: Number,
	},
});

module.exports = mongoose.model('cart', Cart);
