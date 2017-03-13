// Set up your application entry point here...
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

// const HANDOFF_DAY = 'Monday';

console.log(`next switch is ${moment().startOf('week').add(1, 'd').format('dddd, MMMM Do ')}`);

function getSwitchDates(dayOfWeek) {
    // default to monday for switch days
    dayOfWeek = dayOfWeek || 'monday';

    let year;
    let switchDays = [];

    // starting from the current week get all of
    // designated day of week
    let day = moment()
        .startOf('week')
        .day(dayOfWeek);

    if (day.date() > 7) {
        day.add(7,'d');
    }

    year = day.year();

    // while we're in the same year keep getting those mondays
    while(year === day.year()){
        document.body.innerHTML += `<p>${day.toString()}</p>`;

        switchDays.push(day);
        // add 7 days to advance to the next monday
        day.add(7,'d');
    }

    return switchDays;
}

function getCurrentSwitchDate() {

}

function getPreviousSwitchDate() {
    
}

function checkPrimary() {

}

function checkBackup() {

}

function notifySwitch() {

}

console.log(getSwitchDates());
