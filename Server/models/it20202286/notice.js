const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    classDay: {
      type: String,
      required: true
    },
    batch:{
      type:String,
      required:true
    },
  }
);

const Notice = mongoose.model('notice', noticeSchema);

module.exports = Notice;