
var loginPopup = document.querySelector(".connect");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".form-acting");
var yourname = loginPopup.querySelector(".your-name");
var youremail = loginPopup.querySelector(".your-email");
var textus = document.querySelector(".text-us");

textus.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-hidden");
    loginPopup.classList.add("modal-show");
  });

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.add("modal-hidden");
  loginLogin.focus();
});

loginForm.addEventListener("submit", function (evt) {
  if (!yourname.value || !youremail.value)  {
    evt.preventDefault();
    yourname.classList.add("modal-error");
    youremail.classList.add("modal-error");
  } else {
    if (yourname.classList.contains("modal-error"))  {
        yourname.classList.remove("modal-error");
    }
    if (youremail.classList.contains("modal-error"))  {
        youremail.classList.remove("modal-error");
    } 
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27)   { //Escape
      if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-show");
        loginPopup.classList.add("modal-hidden");
        if (yourname.classList.contains("modal-error"))  {
            yourname.classList.remove("modal-error");
        }
        if (youremail.classList.contains("modal-error"))  {
            youremail.classList.remove("modal-error");
        }
      }
    }
  });