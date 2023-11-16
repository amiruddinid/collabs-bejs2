const express = require('express');
const router = express.Router();
const controller=require('../app/controller')



router.post('/api/login', controller.login.login)
router.get('/api/resetpassword', controller.login.resetpassword)
router.get('/api/verifyEmail', controller.login.verifyEmail)



module.exports = router;