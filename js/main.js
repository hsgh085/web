const loginToggleBtn = document.querySelector(".login__toggleBtn");
const loginMenu = document.querySelector(".login__menu");

loginToggleBtn.addEventListener("click", () => {
  loginMenu.classList.toggle("active");
});
