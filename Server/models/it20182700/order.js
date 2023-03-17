const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    order_no: {
      type: String,
      required: true
    },
    order_date: {
      type: String,
      required: true
    },
    scheduled_time: {
      type: String,
      required: true
    },
    order_status: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;