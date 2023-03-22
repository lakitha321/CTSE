const path = require('path');
const express = require('express');
const Student = require('../../models/it20222154/student');
const router = express.Router();

router.route("/add").post(async (req,res)=>{

    const { student_name, parent_name, student_phone, parent_phone, nic, student_email, parent_email, password } = req.body;

    const newStudent = new Student({
        student_name,
        parent_name,
        student_phone,
        parent_phone,
        nic,
        student_email,
        parent_email,
        newStudent
    });

    await newStudent.save().then(()=>{
        res.json("Student Added!");
    }).catch((err)=>{
        res.json(err)
    })

})

router.post(
    '/upload',
    async (req, res) => {
      try {
        const { student_name, parent_name, student_phone, parent_phone, nic, student_email, parent_email, password } = req.body;
        const newStudent = new Student({
          student_name,
          parent_name,
          student_phone,
          parent_phone,
          nic,
          student_email,
          parent_email,
          password
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
  
//   router.get('/getAll/:status', async (req, res) => {
//     try {
//       const Students = await Student.find({Student_status:req.params.status});
//       const sortedByCreationDate = Students.sort(
//         (a, b) => b.createdAt - a.createdAt
//       );
//       res.send({dat: sortedByCreationDate});
//     } catch (error) {
//       res.status(400).send('Error while getting list of Students. Try again later.');
//     }
//   });
  
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
    const { student_name, parent_name, student_phone, parent_phone, nic, student_email, parent_email } = req.body;

    const update = await Student.findByIdAndUpdate(id, {student_name:student_name, parent_name:parent_name, student_phone:student_phone, parent_phone:parent_phone, nic:nic, student_email:student_email, parent_email:parent_email}).then(()=>{
        res.json("Updated");
    }).catch((err)=>{
        res.json("Error");
    })
  
  });
  
  module.exports = router;