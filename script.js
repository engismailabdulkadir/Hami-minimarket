// MOBILE MENU
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

// Show / Hide menu
menuBtn.onclick = function () {
    navLinks.classList.toggle("showMenu");
};

// Close menu when a link is clicked
let links = document.querySelectorAll("#navLinks a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("showMenu");
    });
});

// BACK TO TOP
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.querySelector(".status");

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill all fields!";
        status.style.color = "red";
    } else {
        status.textContent = "Message sent successfully ✔";
        status.style.color = "lightgreen";
    }
});
