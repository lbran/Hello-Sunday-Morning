// Express
const express = require('express');
const app = express();
const port = 3000;

// Twilio
var twilio = require('twilio');
var accountSid = 'your_sid_here'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_here';   // Your Auth Token from www.twilio.com/console
var twilio_client = new twilio(accountSid, authToken);
const RECIPIENT_NUMBER = '+61426086095';
const TWILIO_NUMBER = '+61436015634';

app.use(express.static(`${__dirname}/client`));
require(`./server/routes.js`)(app);

app.listen(port, function() {
    console.log('Listening in on port 3000');
});

// TODO: Post a reply to the user - needs to be deployed first & a webhook created through Twilio
app.post("/message", function (request, response) {
    console.log(request.body);
    response.send("<Response><Message>You have confirmed your registration!</Message></Response>")
});

twilio_client.messages.create({
    body: 'Please respond with \'Yes\' to confirm you have signed up for Hello Sunday Morning.',
    to: RECIPIENT_NUMBER,
    from: TWILIO_NUMBER
}).then((message) => console.log(message.sid));