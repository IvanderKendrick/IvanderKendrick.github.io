// Hamburger Menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Dark-mode
const toggleBtn = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
const htmlElement = document.documentElement;
let isDarkMode = true;

toggleBtn.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");
  if (isDarkMode) {
    darkModeIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.752 15.002A9.718 9.718 0 0112 21c-5.367 0-9.718-4.351-9.718-9.718 0-3.155 1.477-5.92 3.752-7.752a0.75 0.75 0 011.118.851 8.002 8.002 0 00-1.496 4.901A8 8 0 1012 4a8.002 8.002 0 004.901-1.496 0.75 0.75 0 01.851 1.118A9.718 9.718 0 0112 3z"></path>';
  } else {
    darkModeIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-4.95l-.71-.71M5.05 6.34l-.71-.71m0 12.02l.71-.71M19.66 6.34l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10zM12 1a11 11 0 000 22 11 11 0 000-22z"></path>';
  }
  isDarkMode = !isDarkMode;
});
