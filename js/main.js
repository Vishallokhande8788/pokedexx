// console.log("connected")

import data from "./data.json";
// console.log(data)

const inputEl = document.querySelector("input");
console.log(inputEl);
// for(let object of data){
//     console.log(object.name)
// }
const pokemonRow = document.querySelector("[data-pokemon-row]");

//iterate over pokemon data

for (let obj of data) {
  const { name, image, description } = obj; //destructured
  console.log(name);
  // step 1= create a paragraph
  const paragraph = document.createElement("p");

  // step 2 = paragraph ka content (pokemon ka nam)

  paragraph.textContent = name;
  // step 3 = paragraph ko pokemon mein me add karna hai
  pokemonRow.appendChild(pokemonCard(name, image, description));
}

function pokemonCard(name, image, description) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="card">
            <img
              src="${image}"
              class="card-img-top"
              alt="${name}
            />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
            </div>
          </div>`;
  return div;
}

document.addEventListener("keyup", (e) => {
  if (e.key === "/") {
    console.log(`slas hwas pressed`);
    inputEl.focus();
  }
});
