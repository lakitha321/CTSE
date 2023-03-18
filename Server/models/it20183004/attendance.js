const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    sid: {
      type: String,
      required: true
    },
    batch: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  }
);

const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;