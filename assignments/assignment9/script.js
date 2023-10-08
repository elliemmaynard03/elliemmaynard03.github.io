const slide = () => {
    let quotes = ["Don't worry, be happy", "Spread love", "Balance is key", "Life is beautiful", "Be kind"];
    let count = 0;
    let result = document.getElementById("quote");

    const changeQuote = setInterval(() => {
    var randomNumber = Math.floor(Math.random()*11);
    count = (count + randomNumber) % quotes.length;
    var newQuote = quotes[count];
    result.innerHTML = newQuote;
    result.innerHTML = quotes[i];
    i++; 
    
    clearInterval(changeQuote);
    i=0;
        
    
}, 1000);
}

const makeRainbow = () => {
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let i =0;
    
    let rainbow = document.querySelector("#rainbow");
    rainbow.innerHTML = ""; 
    
    const updateRainbow = setInterval(() => {
        const newColor = document.createElement("p");
        newColor.classList.add("box");
        newColor.style.setProperty("background", colors[i]);
        i++;
        rainbow.append(newColor);
        
        
        if(i == colors.length) {
            clearInterval(updateRainbow);
            const newImage = document.getElementById("gold");
            newImage.classList.remove("hidden");
        }

    }, 500);
};


window.onload = () => {
    document.getElementById("quotes-button").onclick = slide;
    document.getElementById("rainbow-button").onclick = makeRainbow;
}