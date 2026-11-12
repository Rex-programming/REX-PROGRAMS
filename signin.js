
// ==========================================
// FAQ ACCORDION
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        faqItems.forEach((faq) => {
            faq.classList.remove("active");
            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded", "false");
            faq.querySelector(".faq-answer").style.maxHeight = "0px";
            faq.querySelector(".faq-icon").textContent = "+";
        });

        if (!isOpen) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";
        }
    });
});


// ==========================================
// SIGN IN / SIGN UP / FORGOT PASSWORD
// ==========================================

const accountForm = document.getElementById("accountForm");

const formEyebrow = document.getElementById("form-eyebrow");
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-description");
const formMessage = document.getElementById("form-message");

const nameField = document.getElementById("name-field");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");
const confirmPasswordField = document.getElementById("confirm-password-field");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const rememberRow = document.getElementById("remember-row");
const forgotLink = document.getElementById("forgot-link");

const submitButton = document.getElementById("submit-button");
const switchMode = document.getElementById("switch-mode");
const switchText = document.getElementById("account-switch");

const socialDivider = document.getElementById("social-divider");
const socialButtons = document.getElementById("social-buttons");

const googleButton = document.getElementById("google-button");
const appleButton = document.getElementById("apple-button");

let currentMode = "signin";

function updateMode(mode) {
    currentMode = mode;

    const isSignup = mode === "signup";
    const isForgot = mode === "forgot";
    const isSignin = mode === "signin";

    // Titles and descriptions

    formEyebrow.textContent = "ACCOUNT";

    formTitle.innerHTML = isSignup
        ? "Create account<span>.</span>"
        : isForgot
            ? "Reset password<span>.</span>"
            : "Sign in<span>.</span>";

    formDescription.textContent = isSignup
        ? "Create your account and become part of the PRIME community."
        : isForgot
            ? "Enter your email to begin the password recovery process."
            : "Welcome back. Sign in to continue your journey with PRIME.";

    // Fields

    nameField.hidden = !isSignup;
    confirmPasswordField.hidden = !isSignup;
    passwordField.hidden = isForgot;

    nameInput.required = isSignup;
    emailInput.required = true;
    passwordInput.required = isSignin || isSignup;
    confirmPasswordInput.required = isSignup;

    passwordInput.autocomplete = isSignup
        ? "new-password"
        : "current-password";

    // Remember me and forgot password

    rememberRow.hidden = !isSignin;
    forgotLink.hidden = !isSignin;

    // Social buttons

    socialDivider.hidden = isForgot;
    socialButtons.hidden = isForgot;

    // Submit button

    submitButton.textContent = isSignup
        ? "Create account"
        : isForgot
            ? "Send reset link"
            : "Sign in";

    // Account switch

    switchText.firstChild.textContent = isSignup
        ? "Already have an account? "
        : "Don't have an account? ";

    switchMode.textContent = isSignup ? "Sign in" : "Sign up";

    formMessage.textContent = "";
}


// Switch between Sign in and Sign up

switchMode.addEventListener("click", () => {
    updateMode(currentMode === "signin" ? "signup" : "signin");
});


// Forgot password

forgotLink.addEventListener("click", () => {
    updateMode("forgot");
});


// Form submission

accountForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (currentMode === "signup") {
        if (passwordInput.value !== confirmPasswordInput.value) {
            formMessage.textContent = "Passwords do not match.";
            return;
        }

        formMessage.textContent =
            "Account creation will be available once authentication is connected.";

    } else if (currentMode === "forgot") {
        formMessage.textContent =
            "Password recovery will be available once authentication is connected.";

    } else {
        formMessage.textContent =
            "Sign in will be available once authentication is connected.";
    }
});


// Google and Apple buttons

googleButton.addEventListener("click", () => {
    formMessage.textContent =
        "Google sign-in will be available once connected.";
});

appleButton.addEventListener("click", () => {
    formMessage.textContent =
        "Apple sign-in will be available once connected.";
});
