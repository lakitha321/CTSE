const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const prodRouter = require("./routes/orders");

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

app.use("/orders", prodRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running at port no: ${PORT}`)
});