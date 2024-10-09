// console.log("connected")

import data from "./data.json" ;
// console.log(data)


const inputEl = document.querySelector("#floatingInputGroup1");
console.log(inputEl);
// for(let object of data){
//     console.log(object.name)
// }
document.addEventListener("keyup", (input) =>{
   if(input.key === "/"){
   inputEl.focus();
   }
});