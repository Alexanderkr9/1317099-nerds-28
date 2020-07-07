var ouradress = document.querySelector(".our-adress");
var loginPopup = document.querySelector(".modal-login");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".form-acting");
var yourname = loginPopup.querySelector(".your-name");
var youremail = loginPopup.querySelector(".your-email");

ouradress.addEventListener("click", function () {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginLogin.focus();
});

loginForm.addEventListener("submit", function (evt) {
  if (!yourname.value || !youremail.value)  {
  evt.preventDefault();
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
        loginPopup.classList.remove("modal-error");
      }
    }
  });