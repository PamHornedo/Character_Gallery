// // Selecting form and input values
const characterForm = document.getElementById("characterForm");
const characterType = document.getElementsByName("character");
const nameInput = document.getElementById("characterName");
const characterDescription = document.getElementById("description");
const characterImage = document.getElementById("imgUrl");
const text = document.querySelector(".textInput");
const image = document.querySelector(".imageInput");

// Getting information from localStorage
const getSavedData = localStorage.getItem("userInput");
const savedData = JSON.parse(getSavedData);

// Creating div and image elements for values from localStorage
for (const key in savedData) {
  let value = savedData[key];
  if (key === "imgUrl") {
    const newImg = document.createElement("img");
    newImg.src = value;
    image.appendChild(newImg);
  } else {
    const newDiv = document.createElement("div");
    let content = `${key}: ${value}<br>`;
    newDiv.innerHTML = content;
    text.appendChild(newDiv);
  }
}

// Listening for form submission
characterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("The form has been submitted.");

  // Making inputted data into an object
  const form = event.target;
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());
  console.log(dataObject);

  // Turning objects into string and putting into localStorage
  const formDataString = JSON.stringify(dataObject);

  localStorage.setItem("userInput", formDataString);

  // Creating div and image elements for inputted values
  for (const [key, value] of formData) {
    if (key === "imgUrl") {
      const newImg = document.createElement("img");
      newImg.src = value;
      image.appendChild(newImg);
    } else {
      const newDiv = document.createElement("div");
      let content = `${key}: ${value}<br>`;
      newDiv.innerHTML = content;
      text.appendChild(newDiv);
    }
  }
});
