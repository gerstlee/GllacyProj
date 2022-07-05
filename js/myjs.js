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

const feedbackLink = document.querySelector(".contacts-feedback-button");
const feedback = document.querySelector(".feedback-section");
const modalWindow = document.querySelector(".feedback-modal-window");
const closeButton = document.querySelector(".feedback-exit-button");
const nameUser = document.querySelector(".feedback-name-input");
const emailUser = document.querySelector(".feedback-email-input");
const form = document.querySelector(".feedback-form");
const textUser = document.querySelector(".feedback-textarea");

let isStorageSupport = true;
let storage = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();

    feedback.classList.add("feedback-show");
    modalWindow.classList.add("feedback-modal-show");

    if (storageName && storageEmail) {
        nameUser.value = storageName;
        emailUser.value = storageEmail;
        textUser.focus();
    } else {
        nameUser.focus();
    }
});

closeButton.addEventListener("click", function () {
    feedback.classList.remove("feedback-show");
    feedback.classList.remove("feedback-error");
    modalWindow.classList.remove("feedback-modal-show")
});

form.addEventListener("submit", function (evt) {
    if (!nameUser.value || !emailUser.value || !textUser.value) {
        evt.preventDefault();
        feedback.classList.remove("feedback-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("feedback-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameUser.value);
            localStorage.setItem("email", emailUser.value);
        }
    }
});