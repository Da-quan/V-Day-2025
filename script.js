// Select the buttons
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Add event listener for the "NO" button
noButton.addEventListener("click", () => {
    alert("Do you even love me - Natalie Wu");
});

// Add event listener for the "YES" button
yesButton.addEventListener("click", () => {
    // Trigger the falling hearts animation
    startFallingHearts();

    // Redirect to the valentines page after 3 seconds (animation duration)
    setTimeout(() => {
        window.location.href = "valentine.html";
    }, 3000); // 3 seconds for the falling hearts
});

// Function to create falling hearts
function startFallingHearts() {
    const heartCount = 50; // Number of hearts to create

    for (let i = 0; i < heartCount; i++) {
        createFallingHeart();
    }
}

// Function to create a single falling heart
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");

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
