'use strict';

const later = require('later');
const config = require('./config');

// set schedule
// const scheduleInterval = startSchedule(config.SCHEDULE_TEXT, updateOnCall);

/**
 * Will Kick off a schedule and run a call back when the schedule runs
 */
function startSchedule(scheduleText, users, callBack) {
    const schedule = later.parse.text(scheduleText);

    return later.setInterval(() => {
            console.log('Updating onCall Schedule');
            callBack(users);
        }, schedule);
}

function stopSchedule(scheduleInterval) {
    scheduleInterval.clear();
}

module.exports = {
    startSchedule,
    stopSchedule
}
