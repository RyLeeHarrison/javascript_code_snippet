// ECMA-262 5th edition December 2009

// # Time Values and Time Range
// A Date object contains a Number indicating a particular instant in time to within a millisecond.
// Such a Number is called a time value. A time value may also be NaN, indicating that the Date
// object does not represent a specific instant of time.
// Time is measured in ECMAScript in milliseconds since 01 January, 1970 UTC. In time values leap seconds are ignored.
// It is assumed that there are exactly 86,400,000 milliseconds per day. ECMAScript Number values can represent all integers
// from –9,007,199,254,740,991 to 9,007,199,254,740,991; this range suffices to measure times to millisecond precision for any
// instant that is within approximately 285,616 years, either forward or backward, from 01 January, 1970 UTC.
// The actual range of times supported by ECMAScript Date objects is slightly smaller: exactly –100,000,000
// days to 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. This gives a
// range of 8,640,000,000,000,000 milliseconds to either side of 01 January, 1970 UTC.
// The exact moment of midnight at the beginning of 01 January, 1970 UTC is represented by the value +0.

const msPerDay = 86400000;

const DayFromYear = y => 365 * (y - 1970) - Math.floor((y - 1901) / 100) + Math.floor((y - 1601) / 400) + Math.floor((y - 1969) / 4);

const TimeFromYear = y => msPerDay * DayFromYear(y);

console.log(
    DayFromYear(4322),
    TimeFromYear(1993)
);