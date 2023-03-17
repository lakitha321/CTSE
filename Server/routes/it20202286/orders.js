const path = require('path');
const express = require('express');
const Order = require('../models/order');
const routerA = express.Router();

routerA.post(
  '/upload',
  async (req, res) => {
    try {
      const { order_no, order_date, scheduled_time } = req.body;
      const order = new Order({
        order_no,
        order_date,
        scheduled_time,
        order_status : "New"
      });
      await order.save();
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

routerA.get('/getAll/:status', async (req, res) => {
  try {
    const orders = await Order.find({order_status:req.params.status});
    const sortedByCreationDate = orders.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send({dat: sortedByCreationDate});
  } catch (error) {
    res.status(400).send('Error while getting list of orders. Try again later.');
  }
});

routerA.get('/getAll', async (req, res) => {
  try {
    const orders = await Order.find({});
    const sortedByCreationDate = orders.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send({dat: sortedByCreationDate});
  } catch (error) {
    res.status(400).send('Error while getting list of orders. Try again later.');
  }
});

routerA.route('/delete/:id').delete(async (req, res) => {

  try {
    const order = await Order.findById(req.params.id);
    await Order.findByIdAndDelete(id).then(()=>{
      res.status(200).send({status: "Ueleted"});
    }).catch((err)=>{
      console.log(err);
      res.status(500).send({status: "Error with delete"});
    });
    
  } catch (error) {
    res.status(400).send('Error');
  }
});

routerA.route('/edit/:status/:id').put(async (req, res) => {

  let id = req.params.id;

  const update = await Order.findByIdAndUpdate(id, {order_status:req.params.status}).then(()=>{
      res.json("Updated");
  }).catch((err)=>{
      res.json("Error");
  })

});

module.exports = routerA;