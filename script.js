        // Add the JavaScript code here
        window.onload = function() {
            // Function to update the clock
            function updateClock() {
                var currentTime = new Date();
                var currentHour = currentTime.getHours();
                var currentMinute = currentTime.getMinutes();
                var currentSecond = currentTime.getSeconds();

                // Calculate the rotation degrees for each hand
                var hourRotation = (currentHour % 12) * 30 + currentMinute * 0.5;
                var minuteRotation = currentMinute * 6 + currentSecond * 0.1;
                var secondRotation = currentSecond * 6;

                // Apply the rotation to the clock hands
                document.getElementById("hour").style.transform = "rotate(" + hourRotation + "deg)";
                document.getElementById("minute").style.transform = "rotate(" + minuteRotation + "deg)";
                document.getElementById("second").style.transform = "rotate(" + secondRotation + "deg)";
            }

            // Update the clock every second
            setInterval(updateClock, 1000);
        };