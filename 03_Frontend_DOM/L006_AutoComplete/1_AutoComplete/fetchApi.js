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


async function getCountries(keyword) {
    try {
        if (!isValidKeyword(keyword)) {
            console.log(`Please pass a valid keyword: ${keyword} in form of string.`);
            return [];
        }

        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        if (rawResponse.status === 404) {
            console.log("Page Not Found!");
            return [];
        } else if (rawResponse.status === 500) {
            console.log("Internal Server Error!");
            return [];
        }

        console.log("Data Found!");  // 200 Ok response.
        // If you want you can perform any type of validation using validation method.

        return await rawResponse.json();
    } catch (err) {
        console.log("Err: ", err);
    }
}

function isValidKeyword(keyword) {
    return keyword != null && keyword != undefined && typeof keyword === "string" && keyword != "";
}



export default getCountries;