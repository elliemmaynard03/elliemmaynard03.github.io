const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi";
    helloP.classList.add("special");
}

const showJasper = () => {
    document.getElementById("jasper").classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper").classList.add("hide");
}


window.onload = () => {
    //get button, tie function to clickage
    const clickButton = document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showJasper;
    document.getElementById("button-hide").onclick = hideJasper;
}

