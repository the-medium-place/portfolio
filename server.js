const express = require('express');
const path = require('path');
var compression = require('compression');
const app = express();
require('dotenv').config();
app.use(compression())

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/html/index.html"))
})

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/test.html"))
})

app.get('/api/projects', (req, res) => {
  console.log('hitting the /api/projects route')
  res.status(200).sendFile(path.join(__dirname, "/public/js/projects.json"))
})

app.get('/api/inprogress', (req, res) => {
  console.log('hitting the /api/inprogress route')
  res.status(200).sendFile(path.join(__dirname, "/public/js/wip.json"))
})


app.post('/contactme', function ({ body }, res) {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: 'zgstowell@gmail.com',
    subject: 'New message from portfolio page!',
    text: `Message from: ${body.username}\n\n Email: ${body.userEmail}\n\n Message:\n ${body.userMessage}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.json(response) // Show a page indicating failure
    }
    else {
      res.send(error) // Show a page indicating success
    }
  })

  // console.log(body)
  // const username = body.username;
  // const userEmail = body.userEmail;
  // const userMessage = body.userMessage;

  // const msg = {
  //   to: 'zgstowell@gmail.com',
  //   from: 'zgstowell@gmail.com',
  //   subject: `PORTFOLIO MESSAGE from ${username}`,
  //   text: `Hey Zac! You've received a message! \n\nFrom: ${username} \n${userEmail} \n\nMessage: ${userMessage}`,
  //   html: `Hey Zac! You've received a message!
  //   <br><br>
  //   <strong>From:</strong> ${username}
  //   <br>
  //   <strong>Email:</strong> ${userEmail}
  //   <br><br>
  //   <strong>Message:</strong> ${userMessage}`,
  // };
  // sgMail.send(msg)
  //   .then(data => {
  //     console.log(data)
  //     res.send(data)
  //   })
  //   .catch(err => console.log(err));


})



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});