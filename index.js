require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

//router update 
const apiRoutes = require('./app/controller/routes.js/update')
app.use('/api', apiRoutes);


app.listen(port, () => 
    console
      .log(`Server run at http://localhost:${port}
    `))

// Mengekspor instance aplikasi Express untuk digunakan di file lain
module.exports = app;