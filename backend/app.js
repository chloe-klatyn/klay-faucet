const express = require('express')
const methodOverride = require('method-override')
const app = express()

const cors = require('cors')
const CORS_WHITELIST = process.env.CORS_WHITELIST.split(',')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(
  cors({
    origin: CORS_WHITELIST,
  })
)

const transactionsController = require('./controllers/transactionsController')
const faucetController = require('./controllers/faucetController')

app.use('/transactions', transactionsController)
app.use('/faucet', faucetController)

module.exports = app
