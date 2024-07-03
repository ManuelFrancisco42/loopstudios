const hamburgerBtnElement = document.querySelector("#open-btn");
const closeBtnElement = document.querySelector("#close-btn");
const navBarElement = document.querySelector('.navbar-nav');


hamburgerBtnElement.addEventListener('click', () => {
  navBarElement.classList.toggle('active')
})

closeBtnElement.addEventListener('click', () => {
  navBarElement.classList.toggle('active')
})