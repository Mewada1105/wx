<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online Exam Timer</title>
<style>
  #timer {
    font-size: 24px;
  }
</style>
</head>
<body>
<div id="timer"></div>

<script>
// Set the duration of the exam in milliseconds
const examDuration = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

// Get the timer element from the DOM
const timerElement = document.getElementById('timer');

// Function to update the timer
function updateTimer() {
    // Get the current time
    const currentTime = new Date().getTime();
    
    // Calculate the remaining time
    const remainingTime = examDuration - (currentTime - examStartTime);
    
    // Check if the time is up
    if (remainingTime <= 0) {
        timerElement.textContent = "Time's up! Exam is over."; // Display a message when the time is up
        clearInterval(timerInterval); // Stop the timer
        // You can also trigger any other actions here such as automatically submitting the exam
    } else {
        // Convert remaining time to hours, minutes, and seconds
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        // Display the remaining time
        timerElement.textContent = `Time Remaining: ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
}

// Get the time when the exam started
const examStartTime = new Date().getTime();

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000); // Update every second (1000 milliseconds)
</script>
</body>
</html>
