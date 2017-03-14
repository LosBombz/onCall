'use strict';

const Hapi = require('hapi');
const later = require('later');
const _ = require('lodash');

// Twilio Credentials and configs
//  TODO: all these id's and phone numbers should be in configs/env vars
const accountSid = 'ACcf879ae1f3f137d3d69338409cdeb851';
const authToken = 'a5d7215fab103ce490398df2f503005b';
// const testPhone = '+16174597041';
const TWILIO_PHONE = '+16175531502';

// scheduling configs
// const SCHEDULE_TEXT = 'every Monday at 12:00pm';
const SCHEDULE_TEXT = 'every 1 sec';

//require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// create the hapi server
const server = new Hapi.Server();
server.connection({ port: 1337, host: 'localhost' });

const users = [
    {
        name: 'Carlos Escobar',
        id: 'carlosescobar11488388975927',
        phone: '555-555-5555',
        phoneFormated: '+15555555555'
    },
    {
        name: 'Joe the Developer',
        id: 'joethedeveloper1488389103156',
        phone: '555-555-5555',
        phoneFormated: '+15555555555'
    },
    {
        name: 'Sam the Developer',
        id: 'samthedeveloper1488389106923',
        phone: '555-555-5555',
        phoneFormated: '+15555555555'
    }
];


server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
        reply(users);
    }
});

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {
        let user = _.find(users, (user) => {
            return user.id === request.params.id;
        });
        reply(user);
    }
});

server.route({
    method: ['POST, UPDATE'],
    path: '/users/{id}',
    handler: function (request, reply) {
        let user = _.find(users, (user) => {
            return user.id === request.params.id;
        });
        reply(user);
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});



// set schedule
const scheduleInterval = startSchedule(SCHEDULE_TEXT, updateOnCall);

/**
 * Will Kick off a schedule and run a call back when the schedule runs
 */
function startSchedule(scheduleText, callBack) {
    const schedule = later.parse.text(SCHEDULE_TEXT);

    return later.setTimeout(() => {
            callBack();
        }, schedule);
}

/**
 * Will send a twilio sms notification 'currently only works with 2 numbers'
 */
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


// these functions are all things I think I'll probably need
function updateOnCall() {

}

function setPrimaryOnCall(user) {

}

function setBackupOnCall(user) {

}

function getPrimaryOnCall(users) {

}

function getBackupOnCall(users) {

}
