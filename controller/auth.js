const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/sign-up', (req, res) => {
	res.render('auth/sign-up.ejs')
})

router.post('/sign-up', async (req, res) => {
	res.send('Form submission accepted!')
})

router.get('sign-in', (req, res) => {
	res.render('auth/sign-in.ejs')
})

module.exports = router
