document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("createAccountForm");
  
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
  
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
  
    function validateName(input, errorElement) {
      const value = input.value.trim();
      if (!/^[A-Za-z]+$/.test(value)) {
        errorElement.textContent = "Please enter a valid name.";
        input.classList.add("invalid");
      } else {
        errorElement.textContent = "";
        input.classList.remove("invalid");
      }
    }
  
    function validateEmail() {
      const value = email.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("invalid");
      } else {
        emailError.textContent = "";
        email.classList.remove("invalid");
      }
    }
  
    function validatePassword() {
      const value = password.value;
      if (
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        passwordError.textContent =
          "Password must be at least 8 characters and include uppercase, number, and symbol.";
        password.classList.add("invalid");
      } else {
        passwordError.textContent = "";
        password.classList.remove("invalid");
      }
    }
  
    function validateConfirmPassword() {
      if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPassword.classList.add("invalid");
      } else {
        confirmPasswordError.textContent = "";
        confirmPassword.classList.remove("invalid");
      }
    }
  
    firstName.addEventListener("input", () => validateName(firstName, firstNameError));
    lastName.addEventListener("input", () => validateName(lastName, lastNameError));
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);
  
    form.addEventListener("submit", function (event) {
      validateName(firstName, firstNameError);
      validateName(lastName, lastNameError);
      validateEmail();
      validatePassword();
      validateConfirmPassword();
  
      if (document.querySelectorAll(".invalid").length > 0) {
        event.preventDefault();
      }
    });
  });
  