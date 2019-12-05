'use strict'
const express = require('express')
const app = express()
const path = require('path')
//  app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page.html'))
})
const port = process.env.PORT || 8800
app.listen(port, console.log('server listening...'))
