// Select the buttons
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Select the popup and close button
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

// Add event listener for the "NO" button
noButton.addEventListener("click", () => {
  popup.classList.remove("hidden"); // Show the pop-up
});

// Add event listener for the close button in the pop-up
closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden"); // Hide the pop-up
});

// Add event listener for the "YES" button
yesButton.addEventListener("click", () => {
  // Redirect to the second page
  window.location.href = "valentine.html";
});
