const date1 = new Date('July 27 1982 21:12:34');
const date2 = new Date('March 19 2009 13:34:23');

const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();

if(timestamp1 > timestamp2) {
    console.log(`timestamp1: ${timestamp1} is greater than timestamp2 ${timestamp2}` )
    console.log(date1.toString())
} else {
    console.log(`timestamp2: ${timestamp2} is greater than timestamp1 ${timestamp1}` )
    console.log(date2.toString())
}

const now = moment()