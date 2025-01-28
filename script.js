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
