const getFeedbacks = async() => {
  try {
      return (await fetch("/api/feedbacks")).json();
  } catch (error) {
      console.log(error);
  }
};

const showFeedbacks = async() => {
  let feedbacks = await getFeedbacks();
  let feedbacksDiv = document.getElementById("feedback-list");
  feedbacksDiv.innerHTML = "";
  feedbacks.forEach((feedback) => {
      const section = document.createElement("section");
      section.classList.add("feedback");
      feedbacksDiv.append(section);

      const a = document.createElement("a");
      a.href = "#";
      section.append(a);

      const h3 = document.createElement("h3");
      h3.innerHTML = country.name;
      a.append(h3);

      a.onclick = (e) => {
          e.preventDefault();
          displayDetails(feedback);
      };
  });
};

const displayDetails = (feedback) => {
  const feedbackDetails = document.getElementById("feedback-details");
  feedbackDetails.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.innerHTML = country.name;
  feedbackDetails.append(h3);

  const dLink = document.createElement("a");
  dLink.innerHTML = "	&#x2715;";
  feedbackDetails.append(dLink);
  dLink.id = "delete-link";

  const eLink = document.createElement("a");
  eLink.innerHTML = "&#9998;";
  feedbackDetails.append(eLink);
  eLink.id = "edit-link";

  const brand = document.createElement("p");
  feedbackDetails.append(brand);
  brand.innerHTML = "Brand: "+feedback.brand;

  const type = document.createElement("p");
  feedbackDetails.append(type);
  type.innerHTML = "Type: "+feedback.type;

  const rating = document.createElement("p");
  feedbackDetails.append(rating);
  rating.innerHTML = "Rating "+feedback.rating;


  eLink.onclick = (e) => {
      e.preventDefault();
      document.querySelector(".dialog").classList.remove("transparent");
      document.getElementById("add-edit-title").innerHTML = "Edit Feedback";
  };

  dLink.onclick = (e) => {
      e.preventDefault();
      const confirmDelete = confirm(`Are you sure you want to delete ${feedback.name}?`);
      if (confirmDelete) {
      deleteFeedback(feedback);
      }
  };

  populateEditForm(feedback);
};

const deleteFeedback = async(feedback) => {
  let response = await fetch(`/api/countries/${feedback._id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json;charset=utf-8"
      }
  });

  if (response.status != 200) {
      console.log("error deleting");
      return;
  }

  let result = await response.json();
  showFeedbacks();
  document.getElementById("feedback-details").innerHTML = "";
  resetForm();
}
const populateEditForm = (feedback) => {
  const form = document.getElementById("add-edit-feedback-form");
  form._id.value = feedback._id;
  form.name.value = feedback.name;
  form.brand.value = feedback.brand;
  form.type.value = feedback.type;
  form.rating.value = feedback.value;
};


const addEditFeedback = async(e) => {
  e.preventDefault();
  const form = document.getElementById("add-edit-feedback-form");
  const formData = new FormData(form);
  let response;

  if (form._id.value == -1) {
      formData.delete("_id");
  
      response = await fetch("/api/feedbacks", {
          method: "POST",
          body: formData
      });
  } 
  else {
      console.log(...formData);

      response = await fetch(`/api/feedbacks/${form._id.value}`, {
          method: "PUT",
          body: formData
      });
  }

  //successfully got data from server
  if (response.status != 200) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";

      // Delay hiding the error message for 3 seconds
      setTimeout(() => {
          errorMessage.style.display = "none";
      }, 3000);

      console.log("Error posting data");
      return;
  } else {
      // Display success message for 3 seconds
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
      setTimeout(() => {
          successMessage.style.display = "none";
          resetForm();
      document.querySelector(".dialog").classList.add("transparent");
      showFeedbacks();
      }, 3000);
  }

  feedback = await response.json();

  if (form._id.value != -1) {
      displayDetails(feedback);
  }
  
};

const resetForm = () => {
  const form = document.getElementById("add-edit-feedback-form");
  form.reset();
  form._id = "-1";
};

const showHideAdd = (e) => {
  e.preventDefault();
  document.querySelector(".dialog").classList.remove("transparent");
  document.querySelector(".dialog").classList.add("animation");
  document.getElementById("add-edit-title").innerHTML = "Add Feedback";
  resetForm();
};


window.onload = () => {
  showFeedbacks();
  document.getElementById("add-edit-feedback-form").onsubmit = addEditFeedback;
  document.getElementById("add-link").onclick = showHideAdd;

  document.querySelector(".close").onclick = () => {
      document.querySelector(".dialog").classList.add("transparent");
  };
};