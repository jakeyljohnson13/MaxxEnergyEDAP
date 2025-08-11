document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const nav = document.querySelector(".main-nav");

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
    
    const newsletterForm = document.querySelector("footer form");
    const emailInput = newsletterForm.querySelector("input[type='email']");

    newsletterForm.addEventListener("submit", function (event) {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const confirmationMessage = document.createElement("p");
        confirmationMessage.textContent = "Thanks for subscribing!";
        confirmationMessage.style.color = "green";
        confirmationMessage.style.marginTop = "10px";
        confirmationMessage.style.display = "none"; // Hidden by default
        newsletterForm.appendChild(confirmationMessage);

        if (!emailRegex.test(email)) {
            event.preventDefault(); // Stop form submission
            alert("Please enter a valid email address.");
            emailInput.focus();
            confirmationMessage.style.display = "none";
        } else {
            event.preventDefault(); // Prevent actual submission for demo
            confirmationMessage.style.display = "block";
            emailInput.value = ""; // Clear input
        }
    });
});
