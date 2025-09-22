const output = document.querySelector(".output");

// Getting information from localStorage
let submissions = JSON.parse(localStorage.getItem("formSubmissions")) ?? [];
// Creating an array to hold multiple submissions
// ... Spread operator: combines separate array information into one array
let arrOfSubmissions = [...submissions];

if (submissions !== null) {
  arrOfSubmissions.forEach((sub, index) => {
    const { Character, Name, Description, imgUrl } = sub;
    // Creating div to hold all input elements of a single form submission
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", `${index}`);
    sessionStorage.getItem("id", card.getAttribute("id"));

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
