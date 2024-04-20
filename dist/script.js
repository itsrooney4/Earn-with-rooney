let totalCoins = 0;
let adsWatchedToday = 0;

const loginForm = document.getElementById("loginForm");
const signupLink = document.getElementById("signupLink");
const adSection = document.getElementById("adSection");
const withdrawSection = document.getElementById("withdrawSection");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // Simulated login functionality
  if (username && password) {
    // Show ad section if logged in successfully
    adSection.classList.remove("hidden");
    // Hide login section
    document.getElementById("loginSection").classList.add("hidden");
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

signupLink.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Sign up functionality not implemented in this example.");
});

document.getElementById("watchAdsButton").addEventListener("click", function() {
  if (adsWatchedToday < 10) {
    totalCoins++;
    adsWatchedToday++;
    alert("You've earned 1 coin for watching the ad.");
  } else {
    alert("You've reached the daily limit of 10 ads.");
  }
});

document.getElementById("withdrawButton").addEventListener("click", function() {
  if (totalCoins >= 1000) {
    totalCoins -= 1000;
    adsWatchedToday = 0; // Reset ads watched count after withdrawal
    alert("You've successfully withdrawn 1000 coins.");
  } else {
    alert("You need at least 1000 coins to withdraw.");
  }
});