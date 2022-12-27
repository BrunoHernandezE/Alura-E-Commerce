const logo = document.querySelector(".controller-logo");
logo.addEventListener("click", () => {
  window.location.href = "../index.html"
})

const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../pages/all-products-page.html"
})