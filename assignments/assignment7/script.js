const showExercise1 = () => {
    document.getElementById("section1").classList.remove("hide");
    document.getElementById("section2").classList.add("hide");
}
const showExercise2 = () => {
    document.getElementById("section2").classList.remove("hide");
    document.getElementById("section1").classList.add("hide");
}
const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};
const colorThermometer = () => {
    const fundsRaised = document.getElementById("funds-raised").value;

    if(fundsRaised == 5000) {
        document.getElementById("thermometer").classList.add("color1");
    } else if (fundsRaised > 5000) {
        document.getElementById("thermometer").classList.add("color2");
    }
    else {
        document.getElementById("thermometer").classList.add("color3");
    }
}

const writeComment = () => {
    const nameOne = document.getElementById("txt-name-1").value;
    const ageOne = document.getElementById("txt-age-1").value;
    const nameTwo = document.getElementById("txt-name-2").value;
    const ageTwo = document.getElementById("txt-age-2").value;
    const nameThree = document.getElementById("txt-name-3").value;
    const ageThree = document.getElementById("txt-age-3").value;
    
    const commentP = document.getElementById("comment-ages");
   
    if(ageOne > ageTwo && ageOne > ageThree) {
        if(ageThree > ageTwo) {
            commentP.innerHTML = nameOne + ", " +nameThree + ", " + nameTwo;
        }else {
            commentP.innerHTML = nameOne + ", " + nameTwo + ", " + nameThree;
        }
    } else if(ageTwo > ageOne && ageTwo > ageThree) {
        if(ageThree > ageOne) {
            commentP.innerHTML = nameTwo + ", " + nameThree + ", " + nameOne;
        } else {
            commentP.innerHTML = nameTwo + ", " + nameOne + ", " + nameThree;
        }
    } else if(ageThree > ageOne && ageThree > ageTwo) {
        if(ageTwo > ageOne) {
            commentP.innerHTML = nameThree + ", " + nameTwo + ", " + nameOne;
        } else {
            commentP.innerHTML = nameThree + ", " + nameOne + ", " + nameTwo;
        }
    } else {
        commentP.innerHTML = "Error, invalid input."
    }

}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("show-1").onclick = showExercise1;
    document.getElementById("show-2").onclick = showExercise2;
    document.getElementById("age-button").onclick = writeComment;
    document.getElementById("display-button").onclick = colorThermometer;
} 