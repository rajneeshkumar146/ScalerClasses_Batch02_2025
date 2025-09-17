import getCountries from "./fetchApi.js";


const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

// Functions.

const handleSearch = async (keyword) => {
    if (!isValidKeyword(keyword)) {
        console.log("Not a valid keyword passed value is: ", keyword);
        return [];
    }
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => country.name.common);
    console.log("contryNameArr: ", countryNameArr);

    return countryNameArr;
}

const populateSuggestionBox = (countryNameArr) => {
    if (countryNameArr.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }

    // Before Showing any result, rset your suggestion box.
    suggestionBox.innerHTML = "";

    const fragment = document.createDocumentFragment();
    countryNameArr.forEach((countryName) => {

        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    });

    suggestionBox.appendChild(fragment);
}

const handleSuggestions = async (event) => {
    const keyword = event.target.value;

    const contryNameArr = await handleSearch(keyword);
    populateSuggestionBox(contryNameArr);
}


function debounce(cb, delay = 500) {
    let timeoutId = null;
    return (...args) => {
        // resetting the timer.
        if (timeoutId) {
            console.log("I'm resetting you now wait again for the start.");
            clearTimeout(timeoutId);
        }


        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;
        }, delay);
    }
}

function isValidKeyword(keyword) {
    return keyword != null && keyword != undefined && typeof keyword === "string" && keyword != "";
}


// handleSearch("India").then(populateSuggestionBox).catch(console.log);

inputBox.addEventListener("input", debounce(handleSuggestions));