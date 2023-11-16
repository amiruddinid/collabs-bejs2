const express = require('express');
const router = express.Router();
const controller=require('../controller')

router.get('/api/accounts', controller.accounts.get)
router.post('/api/delete', controller.accounts.delete)
router.post('/api/create', controller.accounts.create)

module.exports = router;