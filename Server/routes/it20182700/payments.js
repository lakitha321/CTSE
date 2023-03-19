const path = require('path');
const express = require('express');
const Payment = require('../../models/it20182700/payment');
const router = express.Router();

router.post(
    '/upload',
    async (req, res) => {
      try {
        const { date, time, price, status, sid, month} = req.body;
        const newPayment = new Payment({
          date,
          time,
          price,
          status,
          sid,
          month
        });
        await newPayment.save();
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
      const Payments = await Payment.find({});
      res.send(Payments);
    } catch (error) {
      res.json('Error while getting list of Payments. Try again later.');
    }
  });
  
  router.route('/delete/:id').delete(async (req, res) => {
  
    try {
        let id = req.params.id;
        await Payment.findByIdAndDelete(id).then(()=>{
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
    const { date, time, price, status, sid, month} = req.body;

    const update = await Payment.findByIdAndUpdate(id, {date:date, time:time, price:price, status:status, sid:sid, month:month}).then(()=>{
        res.json("Updated");
    }).catch((err)=>{
        res.json("Error");
    })
  
  });
  
  module.exports = router;