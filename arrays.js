// arrays functions 
let arr = ["Fan", "student", 7, null , true];
console.log(arr.length); // counting length of array 

arr.pop();  // for deletion of last element 
console.log(arr); // printing array

arr.push('rakesh'); // insert new element at the end        
console.log(arr);

arr.shift(); // delete 1st element of array
arr.unshift("7"); // delete 1st element of array

// string method in javascript 
let s = "raka is good guy good boy";
console.log(s.length); // length of string 
console.log(s.indexOf("raka")); // return 1st index of the given parameter
console.log(s.lastIndexOf('good')); // return last index of the given parmeter 

console.log(s.slice(1,5)); // String_name.slice(starting_index, ending_index);
console.log(s.replace("raka", "rakes"));
d = s.replace("raka", "raj"); // replace first occurance 
console.log(d, s);




