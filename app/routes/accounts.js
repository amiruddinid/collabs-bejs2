const express = require('express');
const router = express.Router();
const controller=require('../controller')

router.post('/api/delete', controller.accounts.delete)

module.exports = router;