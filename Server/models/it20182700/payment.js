const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    sid: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    nic: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;