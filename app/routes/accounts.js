const express = require('express');
const router = express.Router();
const controller=require('../controller')

router.get('/api/accounts', controller.accounts.get)
router.post('/api/delete', controller.accounts.delete)

module.exports = router;