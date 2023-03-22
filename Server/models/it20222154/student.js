const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      required: true
    },
    parent_name: {
      type: String,
      required: true
    },
    student_phone: {
      type: String,
      required: true
    },
    parent_phone: {
      type: String,
      required: true
    },
    nic: {
      type: String,
      required: true
    },
    student_email: {
      type: String,
      required: true
    },
    parent_email: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    registered_date:{
      type:String,
      required: true
    },
    batch:{
      type:String,
      required:true
    }
   
  }
);

const Student = mongoose.model('student', studentSchema);

module.exports = Student;