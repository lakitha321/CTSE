const path = require('path');
const express = require('express');
const Notice = require('../../models/it20202286/notice');
const router = express.Router();

router.post(
    '/upload',
    async (req, res) => {
      try {
        const { date, time, title, description, year, class_,   } = req.body;
        const newNotice = new Notice({
          date,
          time,
          title,
          description,
          year,
          class_,
        });
        await newNotice.save();
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
  
//   router.get('/getAll/:status', async (req, res) => {
//     try {
//       const Notices = await Notice.find({Notice_status:req.params.status});
//       const sortedByCreationDate = Notices.sort(
//         (a, b) => b.createdAt - a.createdAt
//       );
//       res.send({dat: sortedByCreationDate});
//     } catch (error) {
//       res.status(400).send('Error while getting list of Notices. Try again later.');
//     }
//   });
  
  router.get('/getAll', async (req, res) => {
    try {
      const Notices = await Notice.find({});
    //   const sortedByCreationDate = Notices.sort(
    //     (a, b) => b.createdAt - a.createdAt
    //   );
      res.send(Notices);
    } catch (error) {
    //   res.status(400).send('Error while getting list of Notices. Try again later.');
      res.json('Error while getting list of Notices. Try again later.');
    }
  });
  
  router.route('/delete/:id').delete(async (req, res) => {
  
    try {
        let id = req.params.id;
        await Notice.findByIdAndDelete(id).then(()=>{
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
    const { date, time, title, description, year, class_, } = req.body;

    const update = await Notice.findByIdAndUpdate(id, {date:date, time:time, title:title, description:description, year:year, class_:class_}).then(()=>{
        res.json("Updated");
    }).catch((err)=>{
        res.json("Error");
    })
  
  });
  
  module.exports = router;