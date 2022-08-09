const express = require('express')
const { registerUser } = require('../controllers/usersControllers')

const router = express.Router()

router.route('/').post(registerUser)



module.exports = router