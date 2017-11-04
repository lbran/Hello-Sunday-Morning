TO RUN:

`git clone https://github.com/lbran/Hello-Sunday-Morning.git`

`npm install`

`npm start`

TODO:

User confirmation flow:
1. Deploy the code to Heroku/your choice of host.
2. Setup a webhook on Twilio to receive incoming messages (https://www.twilio.com/docs/guides/how-to-receive-and-reply-in-node-js)

Sending SMS to dynamic phone numbers:
1. Setup Twilio account
2. Copy/paste Twilio secrets (including Twilio phone number) into app.js
3. Once the submit button has been clicked, take the value and use this for sending messages instead of the currently defined constant.
