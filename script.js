

let share__container = document.querySelector(".share__container");
let design = document.querySelector(".design");
let profile__container = document.querySelector(".profile__container");

console.log(design);

function toggleFunction(e) {
  console.log("clicked toggle function");
  console.log(design.classList.toggle("remove"));

}

share__container.addEventListener("click", toggleFunction);
