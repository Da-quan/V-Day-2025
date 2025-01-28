document.addEventListener("DOMContentLoaded", () => {
    // Function to create falling hearts
    const createFallingHearts = () => {
        const heartCount = 50; // Number of hearts to create

        for (let i = 0; i < heartCount; i++) {
            createSingleHeart();
        }
    };

    // Function to create a single falling heart
    const createSingleHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");

        // Randomize initial position and animation duration
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Between 2 and 5 seconds
        heart.style.opacity = Math.random(); // Random opacity for effect

        // Append the heart to the body
        document.body.appendChild(heart);

        // Remove the heart after animation ends
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    };

    // Start the falling hearts animation
    createFallingHearts();
    setInterval(createFallingHearts, 3000); // Add more hearts every 3 seconds
});
