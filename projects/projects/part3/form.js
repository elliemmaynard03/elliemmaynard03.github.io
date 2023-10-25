
    const submitFeedback = (e) => {
    e.preventDefault();
    
    
    
    
    // const form = document.getElementById("form-feedback");
    // const feedbackName = form.elements["feedback-name"].value;
    // const feedbackBrand = form.elements["brand"].value;
    // const rating = form.elements["rating"].value;
    // const termsChecked = form.elements["terms"].checked;

    // console.log(feedbackName);
    // console.log(feedbackBrand);
    // console.log(getRadioValue("type"));
    // console.log(rating);
    // console.log(termsChecked);

    document.getElementById("results").classList.remove("hidden");
    const form = document.getElementById("form-feedback");
    const info = document.getElementById("results");

    const feedbackName = document.createElement("p");
    feedbackName.innerHTML = form.elements["feedback-name"].value;
    info.append(feedbackName);

    const feedbackBrand = document.createElement("p");
    feedbackBrand.innerHTML = form.elements["brand"].value;
    info.append(feedbackBrand);
    
    const feedbackRating = document.createElement("p");
    feedbackRating.innerHTML = form.elements("rating").value;
    info.append(feedbackRating);


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


    document.getElementById("form-feedback").onsubmit = submitFeedback;
