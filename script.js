const themeToggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

let isDarkMode = false;

themeToggleButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    themeIcon.src = "/images/moon.png";
    themeIcon.alt = "Dark Mode";
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    themeIcon.src = "/images/sun.png";
    themeIcon.alt = "Light Mode";
  }
});
