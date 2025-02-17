document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to: June 28, 2025
    const countDownDate = new Date("Jun 28, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " 
          + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "The Wedding Has Begun!";
        }
    }, 1000);
});
