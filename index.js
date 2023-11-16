require('dotenv').config()
const express = require('express')
const app = express()
const txRoute = require("./router/transactionRoute")
const port = 3000

app.use("/api/v1/", txRoute);
app.listen(port, () =>
  console
    .log(`Server run at http://localhost:${port}
    `))

// Mengekspor instance aplikasi Express untuk digunakan di file lain
module.exports = app;