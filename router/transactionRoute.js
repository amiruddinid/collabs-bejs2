const express = require("express");
const txRoute = express.Router();

txRoute.get("transaction/withdraw", (req, res, next) => {
    res.status(200).json({ status: "success", message: "withdraw success" })
})

module.exports = txRoute;