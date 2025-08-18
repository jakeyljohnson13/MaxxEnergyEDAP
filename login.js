document.addEventListener("DOMContentLoaded", function () {
    const formCreate = document.getElementById("createAccountForm");
    
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const createUserName = document.getElementById("createUsername");
    const email = document.getElementById("email");
    const createPassword = document.getElementById("createPassword");
    const confirmPassword = document.getElementById("confirmPassword");
  
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const createUserNameError = document.getElementById("createUserNameError");
    const emailError = document.getElementById("emailError");
    const createPasswordError = document.getElementById("createPasswordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    const formLogin = document.getElementById("loginForm");

    const loginUserName = document.getElementById("loginUserName");
    const loginPassword = document.getElementById("loginPassword");

    const loginUserNameError = document.getElementById("loginUserNameError");
    const loginPasswordError = document.getElementById("loginPasswordError");
  
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

    function validateUserName(input, errorElement) {
      const value = input.value.trim();
      if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)){
        errorElement.textContent = "Username must include uppercase, lowercase and a number.";
        input.classList.add("invalid");
      } else if (value.length < 6 || value.length > 20){
        errorElement.textContent = "Username must be between 6 and 20 characters.";
        input.classList.add("invalid");
      } else if (!/^[A-Za-z0-9]+$/.test(value)) {
        errorElement.textContent = "Username must include only letters and numbers only. No special characters.";
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
  
    function validatePassword(input, errorElement) {
      const value = input.value;
      if (
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        errorElement.textContent =
          "Password must be at least 8 characters and include uppercase, number, and symbol.";
        input.classList.add("invalid");
      } else {
        errorElement.textContent = "";
        input.classList.remove("invalid");
      }
    }
  
    function validateConfirmPassword() {
      if (confirmPassword.value !== createPassword.value) {
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
    createUserName.addEventListener("input", () => validateUserName(createUserName, createUserNameError));
    createPassword.addEventListener("input", validatePassword(createPassword, createPasswordError));
    confirmPassword.addEventListener("input", validateConfirmPassword);

    loginUserName.addEventListener("input", () => validateUserName(loginUserName, loginUserNameError));
    loginPassword.addEventListener("input", () => validatePassword(loginPassword, loginPasswordError));
  
    formCreate.addEventListener("submit", function (event) {
      validateName(firstName, firstNameError);
      validateName(lastName, lastNameError);
      validateUserName(createUserName, createUserNameError);
      validateEmail();
      validatePassword(createPassword, createPasswordError);
      validateConfirmPassword();
  
      if (document.querySelectorAll(".invalid").length > 0) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      
      const userData = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      username: createUserName.value.trim(),
      email: email.value.trim(),
      password: createPassword.value
      };
      
      fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create account');
        }
        return response.json();
      })
      .then(data => {
        alert('Account created successfully!');
        formCreate.reset(); // Clear form
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error creating the account.');
      });
   });

    formLogin.addEventListener("submit", function (event) {
      validateUserName(loginUserName, loginUserNameError);
      validatePassword(loginPassword, loginPasswordError);

      if (document.querySelectorAll(".invalid").length > 0) {
        event.preventDefault();
      }
    });
  });
  