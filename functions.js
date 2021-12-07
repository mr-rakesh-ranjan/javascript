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

