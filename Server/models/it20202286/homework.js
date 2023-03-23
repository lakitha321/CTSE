const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    batch:{
        type:String,
        required:true
      }
    
  }
);

const Homework = mongoose.model('homework', homeworkSchema);

module.exports = Homework;