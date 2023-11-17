require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.set('view engine','ejs')
app.set('views', path.join(__dirname, './app/views'))


app.listen(port, () => 
    console
      .log(`Server run at http://localhost:${port}
    `))

// Mengekspor instance aplikasi Express untuk digunakan di file lain
module.exports = app;