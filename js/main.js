// uil-multiply

const bars = document.querySelector(".bars");
const nav = document.querySelector(".nav");
const closeBtn = bars.querySelector("i");
const menuItems = document.querySelectorAll(".nav li");
const NAME = "uil-multiply";

console.log(menuItems);

bars.addEventListener("click", () => {
  bars.classList.toggle("on");
  nav.classList.toggle("on");
  closeBtn.classList.toggle(NAME);
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    bars.classList.toggle("on");
    nav.classList.toggle("on");
    closeBtn.classList.toggle(NAME);
  });
});
