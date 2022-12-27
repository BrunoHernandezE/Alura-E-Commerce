const logo = document.querySelector(".controller-logo");
logo.addEventListener("click", () => {
  window.location.href = "../index.html"
})

const addProductButton = document.querySelector(".add-product-button");
addProductButton.addEventListener("click", () => {
  window.location.href = "../pages/add-new-product-page.html"
})