const express = require('express');
const router = express.Router();
const controller=require('../app/controller')



router.post('/api/login', controller.login.login)
router.post('/api/verifyemail', controller.login.verifyEmail)



module.exports = router;