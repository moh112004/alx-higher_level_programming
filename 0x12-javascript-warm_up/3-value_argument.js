#!/usr/bin/node
// prints the first argument passed to it

if (process.argv.slice(2)[0] === undefined) {
   console.log('No argument');
}
else {
    console.log(process.argv.slice(2)[0]);
}
