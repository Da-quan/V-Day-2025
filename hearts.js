document.addEventListener("DOMContentLoaded", () => {
    // Function to create falling hearts
    const createFallingHearts = () => {
        const heartCount = 10; // Number of hearts to create at once
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
        heart.style.animationDuration = `${3 + Math.random() * 2}s`; // Between 3 and 5 seconds

        // Append the heart to the body
        document.body.appendChild(heart);

        // Remove the heart after animation ends
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    };

    // Start creating hearts
    const intervalId = setInterval(createFallingHearts, 1000); // Create hearts every second

    // Stop creating hearts after 10 seconds
    setTimeout(() => {
        clearInterval(intervalId);
    }, 10000);
});
