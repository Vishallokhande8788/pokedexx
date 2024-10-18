// export default function PokemonCard(name, image, description, link) {
//   const div = document.createElement("div");
//   div.classList.add("col");
//   div.innerHTML = `<div class="card">
//               <img
//                 src="${image}"
//                 class="card-img-top"
//                 alt="${name}
//               />
//               <div class="card-body">
//                 <h5 class="card-title">${name}</h5>
//                 <p class="card-text">${description}</p>

//                 <a href="${link}" class="btn btn-warning" target="_blank">visit</a>
//               </div>
//             </div>`;
//   return div;
// }
// Component = A part of UI
export default function (name, image, description, link = false) {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
      <div class="card">
      <img
        src="${image}"
        class="card-img-top"
        alt="${name}"
      />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <a href="${link}" class="btn btn-warning ${link || "d-none"}"
         target="_blank">Visit</a>
      </div>
    </div>
    `;
  return div;
}
