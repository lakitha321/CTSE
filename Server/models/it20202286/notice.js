const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema(
  {

  }
);

const Notice = mongoose.model('notice', noticeSchema);

module.exports = Notice;