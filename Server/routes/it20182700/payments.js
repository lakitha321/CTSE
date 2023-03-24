const path = require('path');
const express = require('express');
const Payment = require('../../models/it20182700/payment');
const router = express.Router();

router.post(
    '/upload',
    async (req, res) => {

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();

      try {
        const {price, status, sid, name, nic, month, year} = req.body;
        const newPayment = new Payment({
          date,
          time,
          price,
          status,
          sid,
          name,
          nic,
          month,
          year
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
      const sortedByCreationDate = Payments.sort(
      (a, b) => b.createdAt - a.createdAt
      );
      res.send(sortedByCreationDate);
    } catch (error) {
      res.json('Error while getting list of Payments. Try again later.');
    }
  });

  router.get('/get/:sid/:y', async (req, res) => {
    try {
      const Payments = await Payment.find({
        sid:req.params.sid,
        year:req.params.y
      });
      const sortedByCreationDate = Payments.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      res.send(sortedByCreationDate);
    } catch (error) {
      res.json('Error while getting list of Students. Try again later.');
    }
  });

  router.get('/get/:sid/:y/:m', async (req, res) => {
    try {
      const Paym = await Payment.findOne({
        sid:req.params.sid,
        year:req.params.y,
        month:req.params.m
      });
      if(Paym){
        res.send(Paym);
      }
      else
      {
        res.send({
          date:'undifined',
          time:'undifined',
          price:'undifined',
          status:'undifined'
        });
      }
      
    } catch (error) {
      res.json('Error while getting list of Students. Try again later.');
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
  
  router.route('/edit/:id/:type').put(async (req, res) => {
  
    let id = req.params.id;

    const update = await Payment.findByIdAndUpdate(id, {status:req.params.type}).then(()=>{
        res.json("Updated");
    }).catch((err)=>{
        res.json("Error");
    })
  
  });
  
  module.exports = router;