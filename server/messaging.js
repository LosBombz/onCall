'use strict';
const config = require('./config');
//require the Twilio module and create a REST client
const client = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN);

/**
 * Will send a twilio sms notification 'currently only works with 2 numbers'
 */
function notify(message, user) {
    let name = user.name;
    let number = user.phoneFormatted;
    let onCallStatus = user.primary ? 'Primary' : 'Backup'
    console.log(number, `: ${message} ${onCallStatus} onCall`);
    client.messages.create({
        to: number,
        from: config.TWILIO_PHONE,
        body: `${message} ${onCallStatus} onCall`,
    }, function(err, message) {
        console.log(message);
        console.log(err);
    });
}

module.exports = {
    notify
}
