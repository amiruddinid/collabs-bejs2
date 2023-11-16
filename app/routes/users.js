const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.get("/", controller.users)

module.exports = router;