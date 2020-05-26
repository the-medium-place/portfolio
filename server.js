const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get('/', function(req,res) {
  res.sendFile('index.html')
  
})

app.post('/contactme', function ({ body }, res){
  console.log(body)
  const username = body.username;
  const userEmail = body.userEmail;
  const userMessage = body.userMessage;

  const msg = {
    to: 'zgstowell@gmail.com',
    from: 'zgstowell@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `Hey Zac! You've received a message! From: ${username}, ${userEmail} || Message: ${userMessage}`,
    html: `Hey Zac! You've received a message!<br><br>From: ${username}<br>Email: ${userEmail}<br><br>Message: ${userMessage}`,
  };
  sgMail.send(msg).catch(err=>console.log(err));

})


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});