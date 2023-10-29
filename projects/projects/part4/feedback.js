const getFeedback = async () => {
    const url = "https://elliemmaynard03.github.io/projects/projects/part4/feedback.JSON";
  
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showFeedback = async () => {
    
    let allFeedback = await getFeedback();
    console.log(allFeedback);
    let feedbackSection = document.getElementById("feedback-section");
  
    allFeedback.forEach((feedback) =>
      feedbackSection.append(getFeedbackItem(feedback))
    );
  };
  
  const getFeedbackItem = (feedback) => {
    let feedbackSection = document.createElement("section");
    feedbackSection.classList.add("feedback");
  
    let a = document.createElement("a");
    feedbackSection.append(a);
  
    let h3 = document.createElement("h3");
    h3.innerText = feedback.Name;
    a.append(h3);
  
    
    let brand = document.createElement("p");
    brand.textContent = "Brand: "+`${feedback.Brand}`;
    a.append(brand);

    let type = document.createElement("p");
    type.textContent = "Type: "+`${feedback.Type}`;
    a.append(type);

    let rating = document.createElement("p");
    rating.textContent = "Rating: "+`${feedback.Rating}`;
    a.append(rating);

    return feedbackSection;
  };
  
  
  showFeedback();