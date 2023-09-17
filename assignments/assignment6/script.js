const showPuppy = () => {
    document.getElementById("puppy").classList.remove("hide");
}

const hidePuppy = () => {
    document.getElementById("puppy").classList.add("hide");
}

const hideAnimation = () => {
    document.getElementById("ball").classList.remove("bounce");
}
const playAnimation = () => {
    document.getElementById("ball").classList.add("bounce");
}

const writeComment = () => {
    const productName= document.getElementById("txt-product-name").value;
    const comment = document.getElementById("txt-comment").value;
    const productRating = document.getElementById("txt-rating").value;
    const userName = document.getElementById("txt-username").value;

    const commentP = document.getElementById("comment");

    commentP.innerHTML = "Product Name: " + productName  + " Comment: " + comment + " Product Rating: " + productRating + " User Name: " + userName;
}

window.onload = () => {
    document.getElementById("button-show").onclick = showPuppy;
    document.getElementById("button-hide").onclick = hidePuppy;
    document.getElementById("play-button").onclick = playAnimation;
    document.getElementById("play-button").onclick = hideAnimation;
    document.getElementById("comment-button").onclick = writeComment;


}