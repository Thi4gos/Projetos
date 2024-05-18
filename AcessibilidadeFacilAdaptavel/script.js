document.getElementById("increaseFontButton").addEventListener("click", function() {
    increaseFont();
});

document.getElementById("decreaseFontButton").addEventListener("click", function() {
    decreaseFont();
});

document.getElementById("darkModeButton").addEventListener("click", function() {
    toggleDarkMode();
});

function increaseFont() {
    document.querySelectorAll("h1, h2, p, i").forEach(function(icon) {
        icon.style.fontSize = "2.2em";
    });
}

function decreaseFont() {
    document.querySelectorAll("h1, h2, p, i").forEach(function(icon) {
        icon.style.fontSize = "0.8em";
    });
}

function toggleDarkMode() {
    document.querySelectorAll("html, i").forEach(function(icon) {
        icon.classList.toggle("dark-mode");
    });
}
