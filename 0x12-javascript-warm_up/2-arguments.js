#!/usr/bin/node
function prints(args){
if (args.slice(2).length === 0)
	console.log("No argument");
if (args.slice(2).length === 1)
	console.log("Argument found");
if (args.slice(2).length > 1)
	console.log("Arguments found");
}
const args = process.argv;
prints(args);
