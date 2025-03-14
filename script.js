document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.querySelector(".theme-toggle");
    const githubBtn = document.querySelector(".github-btn");
    const body = document.body;
    const container = document.querySelector(".container");
    
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        container.classList.add("dark");
        themeToggleBtn.classList.add("dark");
    }

    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark");
        container.classList.toggle("dark");
        themeToggleBtn.classList.toggle("dark");
        githubBtn.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
