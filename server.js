const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

const PORT = process.env.PORT ? process.env.PORT : '3000'

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))

// Require and use Controller
const authController = require('./controller/auth')
app.use('/auth', authController)

// Landing Page
app.get('/', async (req, res) => {
	res.render('index.ejs')
})

app.use('/auth', authController)

app.listen(PORT, () => {
	console.log(`Running on localhost:${PORT}`)
})
