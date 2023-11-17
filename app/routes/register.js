const express = require('express')
const router = express()
const controller = require('../controller')


router.get('/register', controller.register.getRegister);
router.post('/register', controller.register.postRegister);



module.exports = router;