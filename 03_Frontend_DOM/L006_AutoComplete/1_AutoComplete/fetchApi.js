/** Make HTTP request from browser -> It is an promise based API */


/***
 * Fetch API request.
 * Get request -> response object.
 * response = header(metadata) + body(actual data)
 * * extrcat actual -> call promsie.json() and
 * this fn os also promise based.
 * 
 * 
 * this route should be public, and dosesn;t required any authentication.
 */


// fetch('https://restcountries.com/v3.1/name/India')
//     .then(function (response) {
//         console.log("My response: ", response);
//         return response.json();
//     }).then((data) => {
//         console.log("My Data: ", data);
//     }).catch((err) => {
//         console.log("There is an error: ", err);
//     });


function getCountries(keyword){

}



export default getCountries;