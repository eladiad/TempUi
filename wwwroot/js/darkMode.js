let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#header-tooltip");
const enableDarkMode = () => {
    document.body.classList.add("tempUi-dark-theme"); //ktu shtohet clasa per dark mode
    localStorage.setItem("darkMode", "true");
};
const disableDarkMode = () => {
    document.body.classList.remove("tempUi-dark-theme");//ktu largohet clasa per dark mode
    localStorage.setItem("darkMode", "false");
};
if (darkMode === "true") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "true") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});
