// console.log("connected")
import { shuffle } from "fast-shuffle";
import Fuse from "fuse.js";

import data from "./data.json";
import PokemonCard from "./components/PokemonCard";

// Dom selection
const inputEl = document.querySelector("input");
// for(let object of data){
//     console.log(object.name)
// }
const pokemonRow = document.querySelector("[data-pokemon-row]");

//iterate over pokemon data
// render
function renderPokemons(list) {
  // empty the previous content

  pokemonRow.innerHTML = "";

  // for (let obj of list) {
  //   const { name, image, description, link } = obj;
  //   const pokemon = PokemonCard(name, image, description, link);
  //   pokemonRow.appendChild(pokemon);
  // }

  //  or
  const fragment = document.createDocumentFragment();

  list.forEach((pokemonObj) => {
    const { name, image, description, link } = pokemonObj;
    const pokemon = PokemonCard(name, image, description, link);
    fragment.appendChild(pokemon);
  });
  // add fragment
  pokemonRow.appendChild(fragment);
}

// filtering
function renderFilteredPokemons(input) {
  // const filteredPokemons = data.filter((obj) =>
  //   obj.name.toLowerCase().includes(input)
  // );

  if (input === "") {
    // isse hum (!input) ase bhi likh sakte hai
    return renderPokemons(data);
  }

  const options = {
    keys: ["name", "abilities"],
    threshold: 0.5,
  };

  const fuse = new Fuse(data, options);
  console.log(fuse.search(input));

  const filteredPokemons = fuse.search(input).map((obj) => obj.item);

  if (!filteredPokemons.length) {
    renderPokemons([
      {
        name: "Not found",
        image:
          "https://ih1.redbubble.net/image.309196451.6526/st,small,507x507-pad,600x600,f8f8f8.u12.jpg",
        description: "Please search valid pokemon  your search is not found .",
        link: "",
      },
    ]);
    return;
  }

  renderPokemons(filteredPokemons);
}
let debounceTimer;
inputEl.addEventListener("input", (e) => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const currentInput = e.target.value.toLowerCase().trim();
    renderFilteredPokemons(currentInput);
  }, 300);
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

// add keyboard functionality
document.addEventListener("keyup", (e) => {
  if (e.key === "/") {
    // console.log(`slas hwas pressed`);
    inputEl.focus();
  }
});

// initial rendering
renderPokemons(shuffle(data));
