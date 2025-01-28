window.onload = () => {
    // Create falling hearts
    for (let i = 0; i < 50; i++) {
        createHeart();
    }

    // Function to create and animate hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        // Randomize heart position and animation duration
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Between 2s and 5s

        // Remove heart after animation
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
};
