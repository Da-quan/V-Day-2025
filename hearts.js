document.addEventListener("DOMContentLoaded", () => {
    // Function to create falling hearts
    const createFallingHearts = () => {
        const heartCount = 5; // Number of hearts to create at once
        for (let i = 0; i < heartCount; i++) {
            createSingleHeart();
        }
    };

    // Function to create a single falling heart
    const createSingleHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");

        // Randomize initial position and animation duration
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDuration = `${5 + Math.random() * 5}s`; // Between 5 and 10 seconds to account for different heights

        // Randomize rotation
        const randomRotation = Math.random() > 0.5 ? '-90deg' : '0deg';
        heart.style.setProperty('--rotation', randomRotation); // Use a CSS variable for rotation

        // Append the heart to the body
        document.body.appendChild(heart);

        // Remove the heart after animation ends
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    };

    // Start creating hearts
    const intervalId = setInterval(createFallingHearts, 1000); // Create hearts every second

    // Stop creating hearts after 30 seconds (adjustable time limit)
    setTimeout(() => {
        clearInterval(intervalId);
    }, 30000); // 30 seconds for continuous heart generation
});
