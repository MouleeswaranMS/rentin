// Apply dark mode on page load if saved in localStorage
document.addEventListener("DOMContentLoaded", () => {
   const isDarkMode = localStorage.getItem("darkMode") === "true";
   if (isDarkMode) {
       document.body.classList.add("dark-mode");
       const darkModeToggle = document.getElementById("darkModeToggle");
       if (darkModeToggle) darkModeToggle.checked = true; // Sync slider state if toggle exists
   }
});

// Toggle dark mode and save the preference
function toggleMode() {
   const isDarkMode = document.body.classList.toggle("dark-mode");
   localStorage.setItem("darkMode", isDarkMode); // Save preference
}

