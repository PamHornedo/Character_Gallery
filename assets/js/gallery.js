// // Selecting form and input values
const characterForm = document.getElementById("characterForm");
const characterType = document.getElementsByName("character");
const nameInput = document.getElementById("characterName");
const characterDescription = document.getElementById("description");
const characterImage = document.getElementById("imgUrl");
const output = document.querySelector(".output");

// Getting information from localStorage
let submissions = JSON.parse(localStorage.getItem("formSubmissions")) ?? [];
// Creating an array to hold multiple submissions
// ... spread operator: combines separate array information into one array
let arrOfSubmissions = [...submissions];

// Creating div and image elements for values from localStorage
if (submissions !== null) {
  arrOfSubmissions.forEach((sub) => {
    const { Character, Name, Description, imgUrl } = sub;
    // Creating div to hold all input elements of a single form submission
    const card = document.createElement("div");

    if (Character) {
      const newDiv = document.createElement("div");
      let content = `Character: ${Character}<br>`;
      newDiv.innerHTML = content;
      card.appendChild(newDiv);
    }

    if (Name) {
      const newDiv = document.createElement("div");
      let content = `Name: ${Name}<br>`;
      newDiv.innerHTML = content;
      card.appendChild(newDiv);
    }

    if (Description) {
      const newDiv = document.createElement("div");
      let content = `Description: ${Description}<br>`;
      newDiv.innerHTML = content;
      card.appendChild(newDiv);
    }

    if (imgUrl) {
      const newImg = document.createElement("img");
      newImg.src = imgUrl;
      card.appendChild(newImg);
    }
    // Appending character cards to output div
    output.appendChild(card);
  });
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

  // Creating div and image elements for inputted values
  const card = document.createElement("div");

  for (const [key, value] of formData) {
    if (key === "imgUrl") {
      const newImg = document.createElement("img");
      newImg.src = value;
      card.appendChild(newImg);
    } else {
      const newDiv = document.createElement("div");
      let content = `${key}: ${value}<br>`;
      newDiv.innerHTML = content;
      card.appendChild(newDiv);
    }
    output.appendChild(card);
  }

  // Adding new entry to the array of submissions
  arrOfSubmissions.push(dataObject);

  // Turning objects into string and putting into localStorage
  localStorage.setItem("formSubmissions", JSON.stringify(arrOfSubmissions));

  // Resets form fields after submission
  form.reset();
});
