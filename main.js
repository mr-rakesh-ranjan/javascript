// const Person = {
//     name : '',
//     age : 0,
//     email: '',
//     setName: function (name) {
//         this.name = name;
//     }

// }

// let rakesh = new Person();
console.log('this is DOM');

let a = document;
// a = document.all;
// a = document.body;
// a = document.forms;
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
a = document.links; // gives all links in given website
a = document.images;
a = document.scripts;

console.log(a);
