// function add(a, b) {
//   return a +b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

// challenge 1


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(name, age) {
  console.log(`Hi ${name}, you are ${age} years old.`);
}

console.log('\nChallenge#1');
greeting(...person);
greeting(...personTwo);



// challenge 2
var names = ['Mike', 'Ben'];
var final = ['Andre', ...names];
console.log('\nChallenge#2');

final.forEach( function (name) {
  console.log('Hi', name);
});

// for (var i = 0; i < final.length; i++) {
//   console.log('Hi', final[i]);
// }
