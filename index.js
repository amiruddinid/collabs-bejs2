require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./app/routes')
const port = 3000

app.use(routes)

app.listen(port, () => 
    console
      .log(`Server run at http://localhost:${port}
    `))

// Mengekspor instance aplikasi Express untuk digunakan di file lain
module.exports = app;