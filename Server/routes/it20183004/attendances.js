const path = require('path');
const express = require('express');
const Attendance = require('../../models/it20183004/attendance');
const router = express.Router();

router.post(
    '/upload',
    async (req, res) => {
      try {
        const { sid, batch, class_, year, month, day, time} = req.body;
        const newAttendance = new Attendance({
          sid,
          batch,
          class_,
          year,
          month,
          day,
          time,
        });
        await newAttendance.save();
        res.json('Saved');
      } catch (error) {
        res.json('Error');
      }
    },
    (error, req, res, next) => {
      if (error) {
        res.status(500).send(error.message);
      }
    }
  );
  
  router.get('/getAll', async (req, res) => {
    try {
      const Attendances = await Attendance.find({});
      res.send(Attendances);
    } catch (error) {
      res.json('Error while getting list of Attendances. Try again later.');
    }
  });
  
  router.route('/delete/:id').delete(async (req, res) => {
  
    try {
        let id = req.params.id;
        await Attendance.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status: "Deleted"});
      }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete"});
      });
      
    } catch (error) {
      res.status(400).send('Error');
    }
  });
  
  router.route('/edit/:id').put(async (req, res) => {
  
    let id = req.params.id;
    const { sid, batch, class_, year, month, day, time, } = req.body;

    const upsid = await Attendance.findByIdAndUpsid(id, {sid:sid, batch:batch, class:class_, year:year, month:month, day:day, time:time}).then(()=>{
        res.json("Upsidd");
    }).catch((err)=>{
        res.json("Error");
    })
  
  });
  
  module.exports = router;