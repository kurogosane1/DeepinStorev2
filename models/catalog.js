const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewCatalog = new Schema({
	productCode: {
		type: String,
		required: true,
	},
	storage: {
		type: String,
		required: true,
	},
	ram: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
	},
});

module.exports = mongoose.model('catalog', NewCatalog);
