var left = 10;

const move = () => {
    let left = 10;
    let p = document.querySelector("#walking-man");

    const updateMan = setInterval(() => {
        document.getElementById("walking-man").style.setProperty("--x", left + "px");
        left++;

        if(left %2 == 0) {
            document.getElementById("walking-man").src="images/run.png";
            console.log("furst");
        }
        else {
            document.getElementById("walking-man").src="images/walk.png";
            console.log("second");
        };
        

        if( left >= 400) {
            clearInterval(updateMan);
        }

        
    }, 100);
};

const colorThermometer = () => {
    let p = document.querySelector("#thermometer"); 
    let background = document.getElementById("funds-raised").value/100;
    let num = 0;
    const updateThermometer = setInterval(() => {
        num++;
        document.getElementById("thermometer").style.setProperty("--num", num + "%");
    
        if(num >= background) {
        clearInterval(updateThermometer);
        }

    }, 30);
    
}


window.onload = () => {
    document.getElementById("walking-man").onclick = move;
    document.getElementById("display-button").onclick = colorThermometer;
};