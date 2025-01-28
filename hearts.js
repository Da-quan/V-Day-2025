// Falling hearts logic
window.onload = () => {
    // Number of hearts to create
    const heartCount = 50;

    for (let i = 0; i < heartCount; i++) {
        createHeart();
    }
};

// Function to create a falling heart
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Randomize initial position and animation duration
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Between 2 and 5 seconds

    // Append the heart to the body
    document.body.appendChild(heart);

    // Remove the heart after animation ends
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}
