// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent actual form submission

//   // ✅ Show success message
//   document.getElementById("successMessage").classList.remove("hidden");

//   // ✅ Optionally clear the form
//   this.reset();
// });

// const form = document.getElementById("contactForm");
// const popup = document.getElementById("popup");
// const closePopup = document.getElementById("closePopup");

// form.addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent actual submit

//   // ✅ Show popup
//   popup.classList.remove("hidden");

//   // ✅ Reset form
//   form.reset();
// });

// closePopup.addEventListener("click", () => {
//   popup.classList.add("hidden");
// });
const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent refresh
  popup.classList.add("show"); // Show popup
  form.reset(); // Clear form
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show"); // Hide popup
});
