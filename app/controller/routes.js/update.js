const express = require('express');
const router = express.Router();
const updateController = require('../api/update');

router.put('/users/:id', updateController.update);

module.exports = router;
