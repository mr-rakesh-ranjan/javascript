console.log('This is fuctions ');

function greet(name) {
    console.log(`Good morning ${name}`);
}

let name = 'Jeet';

greet(name);

//functions as variables

const mygreet = function greets(name) {
    let msg = `Happy birthday ${name}`;
    return msg;

}

console.log(mygreet(name));

function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(11, 11);
console.log(c1, c2);

// conditionals in javascripts

var age = 34;
if (age > 8) {
    console.log('you are not a kid');
}
else {
    console.log('you are kid');
}

// if-else ladder
if (age > 2) {
    console.log("you are kid");
}
else if (age > 56) {
    console.log('you are  senior citizens');
}
else if (a > 18) {
    console.log('you are adult');
} else {
    console.log('this is error ');
}


// for loops

var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log('this is length of array - ' + arr.length);

// for each loop
console.log('this for each loop');
arr.forEach(function (element) {
    console.log(element);
})

// while loops 
console.log('this is while loops');
let j = 0; // used as variable 
//const i = 0; // used as constant when we know that this valriable is not change in whole function of this code otherwise show this type of error " functions.js:72 Uncaught TypeError: Assignment to constant variable.at functions.js:72 "

let k = 0;
while(k <arr.length){
    console.log(arr[k]);
    k++;
}

// do while loop
// do {
//     code...
// }while(condition)
// in do while loop atleast 1 time loops will execute

// continue and break
// continue - for continue the loop 
// break - break the loop after that line



