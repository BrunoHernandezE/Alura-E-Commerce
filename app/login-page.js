const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  window.location.href = "../pages/items-page.html"
})

const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../pages/all-products-page.html"
})