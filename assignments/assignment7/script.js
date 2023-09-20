const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};

const writeComment = () => {
    const nameOne = document.getElementById("txt-name-1").value;
    const ageOne = document.getElementById("txt-age-1").value;
    const nameTwo = document.getElementById("txt-name-2").value;
    const ageTwo = document.getElementById("txt-age-2").value;
    const nameThree = document.getElementById("txt-name-3").value;
    const ageThree = document.getElementById("txt-age-3").value;
    
    const commentP = document.getElementById("comment-ages");
   
    if(ageOne.value > ageTwo.value)
    {
        if(ageTwo.value > ageThree.value) {
            commentP.innerHTML = nameOne + " " +nameTwo + " " + nameThree;
        }else if(ageThree.value > ageOne.value) {
            commentP.innerHTML = nameThree + " " + nameOne + " " + nameTwo;
        }else if(ageOne.value > ageThree.value) {
            commentP.innerHTML = nameTwo + " " + nameThree + " " + nameOne;
        }

    } else if(ageTwo.value > ageOne.value) {
        if(ageTwo.value > ageThree && ageOne.value > ageThree.value) {
            commentP.innerHTML = nameTwo + " " + nameOne + " " + nameThree;
        } else if(ageTwo.value > ageThree && ageOne.value < ageThree.value) {
            commentP.innerHTML = nameTwo + " " + nameThree + " " + nameTwo;
        }
    }
    else if 


}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
};