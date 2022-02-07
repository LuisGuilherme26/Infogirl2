let cards_carroceu = document.querySelectorAll(".depoimentos .carroceu .card");
let nextBtn = document.querySelector(".depoimentos .nextBtn");
let prevBtn = document.querySelector(".depoimentos .prevBtn");

let item_active = 0;
let next_active = 1;

nextBtn.addEventListener("click", () => {
  if (next_active >= cards_carroceu.length) {
    next_active = 0;
  }
  cards_carroceu[next_active].classList.toggle("active");
  cards_carroceu[item_active].classList.toggle("active");
  item_active += 1;
  next_active += 1;

  if (item_active >= cards_carroceu.length) {
    item_active = 0;
  }
  console.log(item_active);
  console.log(next_active);

  //   console.log(cards_carroceu);
});

prevBtn.addEventListener("click", () => {
  let prev_active = item_active - 1;
  if (item_active == 0) {
    prev_active = cards_carroceu.length - 1;
  }

  cards_carroceu[prev_active].classList.toggle("active");
  cards_carroceu[item_active].classList.toggle("active");
  if (prev_active == 2) {
    item_active = 2;
  }
  if (next_active < 0) {
    item_active -= 1;
    next_active = cards_carroceu.length - 1;
  } else {
    item_active -= 1;
  }
  next_active -= 1;
  if (next_active < 0) {
    next_active = cards_carroceu.length - 1;
  }
  console.log(item_active);
  console.log(next_active);
});

console.log(item_active);
console.log(next_active);
