const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config();

const studentRouter = require("./routes/it20222154/students");
const noticeRouter = require("./routes/it20202286/notices");
const attendanceRouter = require("./routes/it20183004/attendances");
const paymentRouter = require("./routes/it20182700/payments");

const PORT = process.env.PORT || 8040;

app.use(cors());

app.use(bodyParser.json());

app.post('/sendmail', async (req, res) => {

  const p_email = req.body.p_email;
  const s_email = req.body.s_email;
  const price = req.body.price;
  const month = req.body.month;
  const year = req.body.year;
  const name = req.body.name;

  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'successeducation752@gmail.com',
      pass: 'geacutfgtedanpbq'
  }
  });

  var mailOption1 = {
  from: 'successeducation752@gmail.com',
  to: `${p_email}`,
  subject: 'Sending an email',
  html: `<div align='center'><h1>Your Payment Received for ${month}/${year}</h1>
  <p>Thank you!</p>
  <h3>Student Name : ${name}</h3>
  <h3>Amount : Rs.${price}</h3>
  </div>`
  };

  var mailOption2 = {
  from: 'successeducation752@gmail.com',
  to: `${s_email}`,
  subject: 'Sending an email',
  html: `<div align='center'><h1>Your Payment Received for ${month}/${year}</h1>
  <p>Thank you!</p>
  <h3>Student Name : ${name}</h3>
  <h3>Amount : Rs.${price}</h3>
  </div>`
  };

  transporter.sendMail(mailOption1, function(error, info){
  if (error) {
      console.log(error);
  } else {
      transporter.sendMail(mailOption2, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent');
          res.send('Email sent');
      }
      });
  }
  });

})

const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const connection = mongoose.connection
connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
});

app.use("/students", studentRouter);
app.use("/notices", noticeRouter);
app.use("/attendance", attendanceRouter);
app.use("/payments", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running at port no: ${PORT}`)
});