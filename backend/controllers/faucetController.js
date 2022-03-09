require('dotenv').config()
const fs = require('fs')
const Caver = require('caver-js')

const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

const caver = new Caver(process.env.BAOBAB_URL)

app.post('/sendKlay', (req, res) => {
  console.log('wallet address: ', req.body)
  res.send('send klay')
})

module.exports = app
