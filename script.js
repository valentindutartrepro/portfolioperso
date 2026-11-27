const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
}

// Thème enregistré ou thème du navigateur
const savedTheme = localStorage.getItem("theme");

applyTheme(savedTheme || (systemTheme.matches ? "dark" : "light"));

// Bouton de changement
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

// Suivre les changements du système si aucun choix manuel
systemTheme.addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
        applyTheme(event.matches ? "dark" : "light");
    }
});