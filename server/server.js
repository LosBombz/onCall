'use strict';

const Hapi = require('hapi');
const _ = require('lodash');
const Boom = require('boom');
const config = require('./config');
const generateId = require('./utils/generateId');
const schedule = require('./schedule');
const messaging = require('./messaging');

let users =  [...require('./mock-db/users')];

// create the hapi server
const server = new Hapi.Server({
        connections: {
            routes: {
                cors: {
                    origin: ['*']
                }
            }
        }
    });

server.connection({
    port: config.server.port,
    host: config.server.host
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('');
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
    path: '/schedule',
    handler: function (request, reply) {
        let schedule = {schedule: config.SCHEDULE_TEXT};

        reply(schedule);
    }
});

server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {
        let user = _.find(users, (user) => {
            return user.id === request.params.id;
        });

        if(user) {
            reply(user);
        } else {
            reply(Boom.notFound(`user with id {${request.params.id}} not found`));
        }

    }
});

server.route({
    method: ['PUT', 'POST'],
    path: '/users',
    handler: function (request, reply) {
        let newUser = {
            name: '',
            phone: null,
            phoneFormatted: null,
            primary: false,
            backup: false,
            order: 0
        }
        let userObj = JSON.parse(request.payload);

        let user = _.find(users, (user) => {
            return user.id === userObj.id;
        });

        if(user) {
            Object.assign(user, userObj);
            reply(user);
        } else {
            Object.assign(newUser, userObj);

            newUser.id = generateId();
            newUser.order = getNewUserOrder(users);
            newUser.phoneFormatted = formatPhone(newUser.phone);

            if(users.length === 0) {
                newUser.primary = true;
                messaging.notify(`${users[0].name} is now`, newUser);
            }
            if(users.length === 1) {
                newUser.backup = true;
                messaging.notify(`${users[1].name} is now`, newUser);
            }

            users.push(newUser);

            reply(newUser);
        }
    }
});

server.route({
    method: 'DELETE',
    path: '/users',
    handler: function (request, reply) {
        let userPayload = JSON.parse(request.payload);
        let userToDelete = _.find(users, (user) => {
            return user.id === userPayload.id;
        });
        if(userToDelete) {
            let result = _.reject(users, (user) => {
                return user.id === userToDelete.id;
            });

            users = result;

            reAssignUserOrders(users);

            if(userToDelete.primary && users.length > 1) {
                users[0].primary = true;
                users[0].backup = false;
                users[1].backup = true;
                messaging.notify(`${userToDelete.name} is no longer`, userToDelete);
                messaging.notify(`${users[0].name} is now`, users[0]);
                messaging.notify(`${users[1].name} is now`, users[1]);
            } else if(users.length === 1 && !users[0].primary){
                users[0].primary = true;
                users[0].backup = false;
                messaging.notify(`${users[0].name} is now`, users[0]);
            }

            if(userToDelete.backup && users.length > 1) {
                users[1].backup = true;
                messaging.notify(`${userToDelete.name} is no longer`, userToDelete);
                messaging.notify(`${users[1].name} is now`, users[1]);
            }

            reply(users);
        } else {
            reply(Boom.notFound(`user with id {${request.params.id}} not found`));
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);

    schedule.startSchedule(config.SCHEDULE_TEXT, users, updateOnCall);
});


// set a new users order to the end of the list
function getNewUserOrder(users) {
    let orderMax = users.length;

    return  orderMax + 1;
}


function reAssignUserOrders(users) {
    users.map((user, idx) => {return user.order = idx + 1});
}


// method for rotation update on schedule change
function updateOnCall(users) {
    let currentPrimaryUser = getPrimaryOnCall(users);

    messaging.notify(`${currentPrimaryUser.name} is no longer`, currentPrimaryUser);

    currentPrimaryUser.primary = false;
    users.splice(0, 1);
    users.push(currentPrimaryUser);
    reAssignUserOrders(users);
    messaging.notify(`${users[0].name} is no longer`, users[0]);


    users[0].backup = false;
    users[0].primary = true;

    messaging.notify(`${users[0].name} is now`, users[0]);

    users[1].backup = true;

    messaging.notify(`${users[1].name} is now`, users[1]);

}


function getPrimaryOnCall(users) {
    let currentPrimaryUser = _.find(users, (user) => {
        return user.primary === true;
    });

    return currentPrimaryUser;
}


function getBackupOnCall(users) {
    let currentBackupUser = _.find(users, (user) => {
        return user.backup === true;
    });

    return currentBackupUser;
}

function formatPhone(phone) {
    let phoneClean = phone.replace(/\D/g, '');

    return `+1${phoneClean}`;
}
