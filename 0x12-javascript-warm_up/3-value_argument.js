#!/usr/bin/node
//Prints value of argument if passed
const args = process.argv.slice(2);
if (args.join('') === '') {
	console.log("No argument");
}
else {
	console.log(process.argv.slice(2)[0]);
}
