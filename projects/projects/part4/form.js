
    const submitFeedback = (e) => {
    e.preventDefault();
    

    document.getElementById("results").classList.remove("hidden");
    const form = document.getElementById("form-feedback");
    const info = document.getElementById("results");

    const feedbackName = document.createElement("p");
    feedbackName.innerHTML = form.elements["feedback-name"].value;
    info.append(feedbackName);

    const feedbackBrand = document.createElement("p");
    feedbackBrand.innerHTML = form.elements["brand"].value;
    info.append(brand);

    const rating = document.createElement("p");
    rating.innerHTML = form.elements("rating").value;
    info.append(rating);


    return info;
};

const getRadioValue = (radioName) => {
    let radios = document.getElementsByName(radioName);

    for (let i in radios) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return "";
};

window.onload = () => {
    document.getElementById("form-feedback").onsubmit = submitFeedback;
};