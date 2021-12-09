/* 
AJAX stands for asynchronous Javascripts and XML.
AJAX is not a programming language,Rather it's a set of existing technologies.
AJAX helps in fetching data  asynchronously wihout interfering with the existing page.
No page reload/refresh.
Modern websites use json instead or XML for data transfer.
*/

console.log("ajax in one video ");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('you have clicked fetch button');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object 
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    

    //use for POST request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // what to do on progress (optional)
    xhr.onprogress = function () {
        console.log("On Progress");
    }

    //on ready state change 
    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
    // }


    // what to do when repose is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        } else {
            console.error('Something went wrong');
        }
    }

    //send the request
    // xhr.send();

    params =` {"name":"teshhfit6754","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log('we are done');

}


36 minute