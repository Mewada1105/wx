<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Online Exam Timer</title>
</head>
<body>

<h1>Online Exam Timer</h1>

<div id="timer">03:00:00</div>

<script>
// Set the timer for 3 hours (3 * 60 * 60 seconds)
let totalSeconds = 3 * 60 * 60;

// Function to update the timer display
function updateTimer() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // Add leading zeros if needed
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the timer display every second
let intervalId = setInterval(function() {
    if (totalSeconds <= 0) {
        clearInterval(intervalId);
        document.getElementById('timer').textContent = 'Time\'s up!';
        // Additional actions after the timer ends can be added here
    } else {
        totalSeconds--;
        updateTimer();
    }
}, 1000);
</script>

</body>
</html>
