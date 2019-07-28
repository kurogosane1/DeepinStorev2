const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const newCatalog = require('../models/catalog');

router.get('/', (req, res) => {
	newCatalog
		.find()
		.then(data => res.send(data))
		.catch(err => console.log(err.message));
});

router.post('/', (req, res) => {
	const { productCode, storage, ram, price } = req.body;
	const catalog = new newCatalog({
		productCode,
		storage,
		ram,
		price,
	});
	catalog
		.save()
		.then(res.send(catalog))
		.catch(err => console.log(err.message));
});
// router.get('/', (req, res)=> {
//     newCatalog.find().then(res.send(data))
// })

module.exports = router;
