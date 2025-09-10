/** 
   2. Javascript.
           a. We have to listen to three events.
            i. Click -> Give the rating.
                        Update star upto taht level.
                        Update rating count.
            
            ii. mouseover -> we have to chnage the star upto that level to yellow without chnaging the rating once rating is given.

            Edge case:
            iii. mouseleave: move it gray stars.

 */

const starContainer = document.querySelector(".star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");

let clickedStarIndex = 0;
let RATING_COLOR = "yellow";

// Event Listners for click on star.
starContainer.addEventListener("click", (event) => {
    if(event.target.hasAttribute("idx")){
        clickedStarIndex = event.target.getAttribute("idx");
        fillStarsWithYellowUpToIndex(clickedStarIndex);
        countSpan.textContent = clickedStarIndex;
    }
});

// Event Listner for mouseHover.
starContainer.addEventListener("mouseover", (event) => {
    if(event.target.hasAttribute("idx")){
        currentHoverIndex = event.target.getAttribute("idx");
        fillStarsWithYellowUpToIndex(currentHoverIndex);
    }
});

// Event Listner for mouseHover.
starContainer.addEventListener("mouseleave", (event) => {
    fillStarsWithYellowUpToIndex(clickedStarIndex);
});

// Helper Logic.
function fillStarsWithYellowUpToIndex(lastIndexOfStar){
    resetAllStarsToGrayColor();

    for(let currentStarIndex = 0; currentStarIndex < lastIndexOfStar; currentStarIndex++){
        starArray[currentStarIndex].classList.add(RATING_COLOR);
    }
}

function resetAllStarsToGrayColor(){
    for(star of starArray){
        star.classList.remove(RATING_COLOR);
    }
}




