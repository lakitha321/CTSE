const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

// const studentRouter = require("./routes/it20222154/students");
// const noticeRouter = require("./routes/it20202286/notices");

const PORT = process.env.PORT || 8040;

app.use(cors());

app.use(bodyParser.json());

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

// app.use("/students", studentRouter);
// app.use("/notices", noticeRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running at port no: ${PORT}`)
});