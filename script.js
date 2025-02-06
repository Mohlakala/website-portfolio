document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementById("animated-title");
    let text = title.innerText;
    title.innerText = ""; // Clear the existing text

    text.split("").forEach((letter, index) => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.1}s`; // Delay each letter
        title.appendChild(span);
    });
});
