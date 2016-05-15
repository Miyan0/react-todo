var moment = require('moment');
// import moment from 'node_modules/moment/src/moment';

console.log(moment().format());

// Unix timestamp
// Based on number of seconds since January 1st 1970 @ 12:00 am
// January 1st 1970  @ 12:00am -> 0
// January 1st 1970  @ 12:01am -> 60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1463332401;

var  currentMoment = moment.unix(timestamp);
var format = 'MMM D, YY @ H:mm a';
console.log('current moment', currentMoment.format(format));

// challenge
// full month, day as 1st, 2nd, 3rd, full year, @ 12:13 AM
format = 'MMMM Do, YYYY @ H:mm A';
console.log('challenge', currentMoment.format(format));
