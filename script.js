/* ==============================
   Part 1: Event Handling & Interactive Features
   ============================== */

/* ----- Feature 1: Light/Dark Mode Toggle ----- */
const themeToggleBtn = document.getElementById("themeToggleBtn");
themeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

/* ----- Feature 2: Counter Button ----- */
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const countDisplay = document.getElementById("count");

counterBtn.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

/* ----- Feature 3: Collapsible FAQ ----- */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

/* ==============================
   Part 2: Custom Form Validation
   ============================== */
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting

    // Clear previous message
    formMessage.textContent = "";
    formMessage.style.color = "red";

    // Input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let errors = [];

    // Name validation
    if (name === "") {
        errors.push("Name is required.");
    }

    // Email validation (simple regex)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email.");
    }

    // Password validation
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }

    if (errors.length > 0) {
        formMessage.innerHTML = errors.join("<br>");
    } else {
        formMessage.style.color = "green";
        formMessage.textContent = "Form submitted successfully!";
        signupForm.reset();
    }
});
