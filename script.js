// Select the buttons
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Add event listener for the "NO" button
noButton.addEventListener("click", () => {
    alert("Do you even love me - Natalie Wu");
});

// Add event listener for the "YES" button
yesButton.addEventListener("click", () => {
    // Trigger the hearts animation
    startFallingHearts();

    // Redirect to valentine.html after 3 seconds (animation duration)
    setTimeout(() => {
        window.location.href = "valentine.html";
    }, 3000);
});

// Function to create falling hearts
function startFallingHearts() {
    const heartCount = 50; // Number of hearts to create

    for (let i = 0; i < heartCount; i++) {
        createHeart();
    }
}

// Function to create a single heart
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
