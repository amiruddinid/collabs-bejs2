const express = require('express');
const router = express.Router();

const users = require('./users');

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.use(users);

module.exports = router;