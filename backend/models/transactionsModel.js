const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema(
  {
    recipientAddress: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Transaction', transactionSchema)
