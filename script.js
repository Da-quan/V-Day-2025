// Select the buttons
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Add event listener for the "NO" button
noButton.addEventListener("click", () => {
    alert("Do you even love me - Natalie Wu");
});

// Add event listener for the "YES" button
yesButton.addEventListener("click", () => {
    // Redirect to the second page
    window.location.href = "valentine.html";
});

document.addEventListener("DOMContentLoaded", () => {
    const decor = document.querySelector(".decor");
    const heartCount = 20; // Number of hearts to generate

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.top = `${Math.random() * 100}%`; // Random vertical position
        heart.style.left = `${Math.random() * 100}%`; // Random horizontal position
        heart.style.width = `${30 + Math.random() * 40}px`; // Random size between 30-70px
        heart.style.height = heart.style.width; // Keep it square
        heart.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
        decor.appendChild(heart);
    }
});
