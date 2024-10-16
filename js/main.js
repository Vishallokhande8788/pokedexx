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

// render

function renderPokemons(list) {
  // empty the previous content

  pokemonRow.innerHTML = "";

  for (let obj of list) {
    const { name, image, description, link } = obj;
    const pokemon = PokemonCard(name, image, description, link);
    pokemonRow.appendChild(pokemon);
  }
}
renderPokemons(data);

// filter functionality

inputEl.addEventListener("input", (e) => {
  const currentInput = e.target.value.toLowerCase().trim();

  const filteredPokemons = data.filter((obj) =>
    obj.name.toLowerCase().includes(currentInput)
  );

  if (filteredPokemons.length === 0) {
    renderPokemons([
      {
        name: "Not found",
        image:"https://ih1.redbubble.net/image.309196451.6526/st,small,507x507-pad,600x600,f8f8f8.u12.jpg",
        description: " please search valid pokemon  your search is not found.",
        link: "https://pokemon.com",
      },
    ]);
    return;
  }

  renderPokemons(filteredPokemons);
});
// for (let obj of data) {
//   const { name, image, description, link} = obj; //destructured
// //   console.log(name);
// //   // step 1= create a paragraph
// //   const paragraph = document.createElement("p");

// //   // step 2 = paragraph ka content (pokemon ka nam)

// //   paragraph.textContent = name;
// //   // step 3 = paragraph ko pokemon mein me add karna hai
//   pokemonRow.appendChild(PokemonCard(name, image, description, link));
// }

document.addEventListener("keyup", (e) => {
  if (e.key === "/") {
    // console.log(`slas hwas pressed`);
    inputEl.focus();
  }
});
