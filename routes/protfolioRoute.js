const express = require('express')
const { sendEmailController } = require('../controller/protfolioController')

//router object

const router =express.Router()

//routes

router.post('/senEmail', sendEmailController)

//export

module.exports =router