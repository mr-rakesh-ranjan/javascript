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

/* 
    ------------ Methods Of Arrays-----------
    1. concat() joins two or more arrays and returns a new array.
    2. join(delimiter = ',') joins all elements of an array into a string.
    3. push() adds one or more elements to the end of an array and returns the resulting length of the array.
    4. pop() removes the last element from an array and returns that element.
    5. shift() removes the first element from an array and returns that element.
    6. unshift() adds one or more elements to the front of an array and returns the new length of the array.
    7. slice(start_index, upto_index) extracts a section of an array and returns a new array.
    8. splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.
    9. reverse() transposes the elements of an array, in place: the first array element becomes the last and the last becomes the first. It returns a reference to the array.
    10. sort() sorts the elements of an array in place, and returns a reference to the array.
    11. indexOf(searchElement[, fromIndex]) searches the array for searchElement and returns the index of the first match.
    12. forEach(callback[, thisObject]) executes callback on every array item and returns undefined.
        ex-  let a = ['a', 'b', 'c']
             a.forEach(function(element) { console.log(element) })
             // logs each item in turn
    13. map(callback[, thisObject]) returns a new array of the return value from executing callback on every array item.
        ex- let a1 = ['a', 'b', 'c']
            let a2 = a1.map(function(item) { return item.toUpperCase() })
            console.log(a2) // logs ['A', 'B', 'C']
    14.         

*/


