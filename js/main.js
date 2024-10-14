// console.log("connected")

import data from "./data.json";
// console.log(data)

import PokemonCard from "./components/PokemonCard";

const inputEl = document.querySelector("input");
console.log(inputEl);
// for(let object of data){
//     console.log(object.name)
// }
const pokemonRow = document.querySelector("[data-pokemon-row]");

//iterate over pokemon data

for (let obj of data) {
  const { name, image, description, link} = obj; //destructured
//   console.log(name);
//   // step 1= create a paragraph
//   const paragraph = document.createElement("p");

//   // step 2 = paragraph ka content (pokemon ka nam)

//   paragraph.textContent = name;
//   // step 3 = paragraph ko pokemon mein me add karna hai
  pokemonRow.appendChild(PokemonCard(name, image, description, link));
}



document.addEventListener("keyup", (e) => {
  if (e.key === "/") {
    console.log(`slas hwas pressed`);
    inputEl.focus();
  }
});
