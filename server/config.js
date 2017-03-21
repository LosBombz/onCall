// Twilio Credentials and configs
//  TODO: all these id's and phone numbers should be in configs/env vars
module.exports = {
    ACCOUNT_SID : 'ACcf879ae1f3f137d3d69338409cdeb851',
    AUTH_TOKEN : 'a5d7215fab103ce490398df2f503005b',
    TWILIO_PHONE : '+16175531502',

    // scheduling configs
    // runs the schedule every monday at 12:00pm
    // https://bunkat.github.io/later
    // SCHEDULE_TEXT : 'every Monday at 12:00pm',

    // uncomment this line to see the scheduling fire more often
    SCHEDULE_TEXT : 'every 5 sec',
    server: {
        port: 1337,
        host: 'localhost'
    }
};
