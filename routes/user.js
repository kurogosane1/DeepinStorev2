const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { check, validationResult } = require('express-validator');

router.post(
	'/',
	[
		check('firstName', 'Please add First name')
			.not()
			.isEmpty(),
		check('lastName', 'Please add Last Name')
			.not()
			.isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const {
			firstName,
			middleName,
			lastName,
			email,
			password,
			password2,
		} = req.body;
		const userInfo = new User({
			firstName,
			middleName,
			lastName,
			email,
			password,
			password2,
		});
		const salt = await bcrypt.genSalt(10);
		userInfo.password = await bcrypt.hash(password, salt);
		userInfo.password2 = await bcrypt.hash(password, salt);

		userInfo
			.save()
			.then(data => res.json(data))
			.catch(err => console.log(err.message));
	}
);

router.get('/', (req, res) => {
	User.find()
		.then(data => res.json(data))
		.catch(err => console.log(err.message));
});

module.exports = router;
