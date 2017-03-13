
const later = require('later');
const api = require('./api/mockUsersApi');

// Twilio Credentials
const accountSid = 'ACcf879ae1f3f137d3d69338409cdeb851';
const authToken = 'a5d7215fab103ce490398df2f503005b';

//require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// const testPhone = '+16174597041';
const TWILIO_PHONE = '+16175531502';

console.log('boom');

// const SCHEDULE_TEXT = 'every Monday at 12:00pm';
const SCHEDULE_TEXT = 'every 1 sec';

const scheduleInterval = startSchedule(SCHEDULE_TEXT, updateOnCall );

function startSchedule(scheduleText, callBack) {
    const schedule = later.parse.text(SCHEDULE_TEXT);

    return later.setTimeout(() => {
            callBack();
        }, schedule);
}

function updateOnCall() {
    api.getAllUsers().then((users) => {
        console.log(users);
    });
}

function notify(message, userNumber) {
    console.log(message, userNumber);
    client.messages.create({
        to: userNumber,
        from: TWILIO_PHONE,
        body: 'you are now primary on call',
    }, function(err, message) {
        console.log(message);
        console.log(err);
    });
}

function setPrimaryOnCall(user) {

}

function setBackupOnCall(user) {

}

function getPrimaryOnCall(users) {

}

function getBackupOnCall(users) {

}
