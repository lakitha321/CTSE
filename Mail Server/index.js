const express = require('express');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 8040;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

//sending an email to the customer
app.post('/sendmail', async (req, res) => {

    const email = req.body.email;
    const price = Number(req.body.price);
    const cprice = price/100;
    const items = req.body.items;
    const id = req.body.id;

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'successeducation752@gmail.com',
        pass: 'geacutfgtedanpbq'
    }
    });

    var mailOptions = {
    from: 'successeducation752@gmail.com',
    to: `${email}`,
    subject: 'Sending an email',
    html: `<div align='center'><h1>Your Order Recieved</h1>
    <p>Thank you!</p>
    <p>Your order ID : ${id}</p>
    <h3>Orderd Items : ${items}</h3>
    <h3>Total Price : ${cprice}</h3>
    <h3>Is Paid ? : Yes</h3>
    </div>`

    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));