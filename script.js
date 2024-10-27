"use strict";
const checkbox = document.getElementById("dark-mode-checkbox");

// Add an event listener to detect when the checkbox is toggled
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // If checked, apply dark mode
    document.body.classList.add("dark-mode");
  } else {
    // If not checked, apply light mode
    document.body.classList.remove("dark-mode");
  }
});
