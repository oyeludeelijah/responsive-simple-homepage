const desktopToggle = document.getElementById("dark-mode-checkbox");
const mobileToggle = document.getElementById("dark-mode-checkbox-mobile");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // Sync both checkboxes
  desktopToggle.checked = document.body.classList.contains("dark-mode");
  mobileToggle.checked = document.body.classList.contains("dark-mode");
}

desktopToggle.addEventListener("change", toggleDarkMode);
mobileToggle.addEventListener("change", toggleDarkMode);

function toggleMobileMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
