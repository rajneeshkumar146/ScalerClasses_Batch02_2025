const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
    const targetElem = event.target;
    if (targetElem.classList.contains("reply")) {
        createReplyInput(event);
    } else {
        const isSubmit = targetElem.classList.contains("btn-submit");
        if (isSubmit) {
            createComment(event);
        }
    }
});

function createReplyInput(event) {
    const fragment = document.createDocumentFragment();

    // <div class="comment_reply_container">
    //    <input type="text" placeholder="Type your comment here...">
    //    <div class="btn-submit">Submit</div>
    // </div>

    // Create elements.
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    // Set class or attributes.
    replyContainer.setAttribute("class", "comment_reply_conatiner");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Type your comment here...");

    button.setAttribute("class", "btn-submit");
    button.textContent = "Submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    event.target.parentNode.appendChild(fragment);
}

function createComment(event) {
    // <div class="comment-container">
    //      <div class="comment_card">
    //      <h3 class="coment_text">Thanks for asking, How are you?</h3>
    //      <div class="reply">Reply</div>
    // </div>

    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");

    const input = event.target.parentNode.children[0];

    commentContainer.innerHTML =
        `<div class="comment_card">
     <h3 class="coment_text">${input.value}</h3>
     <div class="reply">Reply</div>`;

     const commentReplyConatiner = event.target.parentNode;
     const commentCard = commentReplyConatiner.parentNode;

     commentCard.replaceChild(commentContainer, commentReplyConatiner);
}