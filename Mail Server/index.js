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

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));