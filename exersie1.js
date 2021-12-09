/* you have to create a variable which is string containing the text which is a link you are interested in
    You have to fetch all the links from a given page which contains this text.

*/
// Objects and class

const Person = {
    name : '',
    age: 0,
    aim:'',
};
let raka = new Person();
raka.name = 'rakesh';
raka.age = 19;
raka.aim = pro;

showProps(Person, raka);
function showProps(obj, objName) {
    let result = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

// obj.hasOwnProperty() is used to filter out properties from the object's prototype chain