const express = require('express');
const authController = require('../controllers/User');
const { verifyToken } = require('../utils/jwt');
const router = express.Router();
const {getUser} = require('../controllers/User')

router.post('/signup',authController.signup)
router.post('/login',authController.login)
// router.get('/createUser', createUser)
router.get('/getUser', verifyToken,getUser)


module.exports = router;