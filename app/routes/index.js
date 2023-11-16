const express = require('express');
const router = express.Router();

const users = require('./users');
const accounts = require('./accounts');
const { accounts } = require('../controller');

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.use(users);
router.use(accounts);

module.exports = router;