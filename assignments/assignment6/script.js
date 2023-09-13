const showPuppy = () => {
    document.getElementById("puppy").classList.remove("hide");
}

const hidePuppy = () => {
    document.getElementById("puppy").classList.add("hide");
}

window.onload = () => {
    document.getElementById("button-show").onclick = showPuppy;
    document.getElementById("button-hide").onclick = hidePuppy;
}