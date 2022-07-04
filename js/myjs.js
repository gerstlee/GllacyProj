/*SLider*/

let slideIndex = 1;
let sliderButtons = document.querySelectorAll(".slider-controls-button");
let slides = document.querySelectorAll(".slider");
let wrapper = document.querySelector(".page-body");

function changeSlide (n) {
    if (n != slideIndex) {
        sliderButtons[slideIndex - 1].classList.remove("current");
        sliderButtons[n - 1].classList.add("current");  
        slides[slideIndex - 1].classList.remove("slider-current");
        slides[n - 1].classList.add("slider-current");
        wrapper.classList.replace("page-wrapper-"+ slideIndex, "page-wrapper-"+ n );
        slideIndex = n; 
    }
};

/*Login*/

const loginEmailUser = document.querySelector(".autorization-login-input");
const loginPasswordUser = document.querySelector(".autorization-password-input");
const loginButton = document.querySelector(".autorization-button");
const loginForm = document.querySelector(".autorization-form");
const loginSection = document.querySelector(".autorization-wrap");

let authorizationIsStorageSupport = true;

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    authorizationIsStorageSupport = false;
}

loginForm.addEventListener("submit", function(evt) {
    if (!loginEmailUser.value || !loginPasswordUser.value) {
        evt.preventDefault;
        loginSection.classList.remove("feedback-error");
        loginSection.offsetWidth = loginSection.offsetWidth;
        loginSection.classList.add("feedback-error");
    } else {
        if (authorizationIsStorageSupport) {
            localStorage.setItem("email", loginEmailUser.value);
        }
    }
});

/*Feedback*/

const feedbackLink = document.querySelector