// Set the date we're counting down to
let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
let delayCountDown = 1000;

// Update the countdown every 1 second
let x = setInterval(function() {

    // Get the current date and time
    let now = new Date().getTime();

    // Calculate the remaining time
    let distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerHTML = days + ' d';
    document.getElementById("hours").innerHTML = hours + ' h';
    document.getElementById("minutes").innerHTML = minutes + ' m';
    document.getElementById("seconds").innerHTML = seconds + ' s';
    
    // Display a message when the countdown is over
    if (distance < 0) {
        // The setInterval function is used to repeatedly execute a function at specified intervals. 
        // In this case, it's assigned to the variable x. When the countdown is over, we no longer 
        // need to update it every second, so we clear the interval using clearInterval(x) to stop 
        //the countdown updates.
        clearInterval(x);
        // document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
}, delayCountDown);