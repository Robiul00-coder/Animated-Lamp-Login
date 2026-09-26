// Select Elements
const body = document.body;

const pullCord = document.getElementById("pullCord");

const authWrapper = document.getElementById("authWrapper");

const loginForm = document.getElementById("loginForm");

const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");

const showLogin = document.getElementById("showLogin");

const loginFormElement = document.getElementById("loginFormElement");

const signupFormElement = document.getElementById("signupFormElement");


// Lamp State


// Initially OFF
let lampOn = false;

// Lamp Toggle
function toggleLamp() {

    lampOn = !lampOn;

    body.classList.toggle("lamp-on", lampOn);

    body.classList.toggle("lamp-off", !lampOn);

    // Pull cord animation
    pullCord.classList.remove("pulled");

    void pullCord.offsetWidth;

    pullCord.classList.add("pulled");

    // Show / Hide Form
    if (lampOn) {

        authWrapper.classList.add("show-form");

    } else {

        authWrapper.classList.remove("show-form");
    }

}

// Click Event
pullCord.addEventListener("click", toggleLamp);

// Keyboard Event
pullCord.addEventListener("keydown", function (event) {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        toggleLamp();
    }

});

// Login / Signup Switch
showSignup.addEventListener("click", function (event) {

    event.preventDefault();

    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");

});


showLogin.addEventListener("click", function (event) {

    event.preventDefault();

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

});

// Demo Login
loginFormElement.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Login successful! 🎉");

});

// Demo Signup
signupFormElement.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Account created successfully! 🎉");

});

// Initial State
body.classList.add("lamp-off");

authWrapper.classList.remove("show-form");