'use strict'
const express = require('express')
const app = express()
const path = require('path')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'page.html'))
  res.sendFile(path.join(__dirname, 'lab5.js'))
})
const port = process.env.PORT || 8800
app.listen(port, console.log('server listening...'))
