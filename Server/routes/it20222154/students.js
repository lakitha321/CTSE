const path = require('path');
const express = require('express');
const Student = require('../../models/it20222154/student');
const router = express.Router();



router.post(
    '/upload',
    async (req, res) => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      try {
        const { student_name, parent_name, student_phone, parent_phone, nic, student_email, parent_email, password ,batch} = req.body;
        const newStudent = new Student({
          student_name,
          parent_name,
          student_phone,
          parent_phone,
          nic,
          student_email,
          parent_email,
          password,
          registered_date:date,
          batch
        });
        await newStudent.save();
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
  
  router.route("/log/:email").post(async (req,res)=>{

    let userEmail = req.params.email;
    const password = req.body.password;

    const Students = await Student.findOne({student_email:userEmail}).then((Students)=>{
        if(password == Students.password){
            res.json({status: true, details:Students});
        }
        else{
            res.status(500).send({status: false});
        }
    }).catch((err)=>{
        res.status(500).send({status: false});
    })
  })
  
  router.get('/getAll', async (req, res) => {
    try {
      const Students = await Student.find({});
    //   const sortedByCreationDate = Students.sort(
    //     (a, b) => b.createdAt - a.createdAt
    //   );
      res.send(Students);
    } catch (error) {
    //   res.status(400).send('Error while getting list of Students. Try again later.');
      res.json('Error while getting list of Students. Try again later.');
    }
  });

  router.get('/get/:id', async (req, res) => {
    try {
      const Stud = await Student.findById(req.params.id);
      res.send(Stud);
      console.log(Stud.student_name);
    } catch (error) {
      res.json('Error while getting list of Students. Try again later.');
    }
  });
  
  router.route('/delete/:id').delete(async (req, res) => {
  
    try {
        let id = req.params.id;
        await Student.findByIdAndDelete(id).then(()=>{
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
    const { student_name, student_phone, nic, student_email } = req.body;

    const update = await Student.findByIdAndUpdate(id, {student_name:student_name, student_phone:student_phone, nic:nic, student_email:student_email}).then(()=>{
        res.json("Updated");
    }).catch((err)=>{
        res.json("Error");
    })
  
  });
  
  module.exports = router;