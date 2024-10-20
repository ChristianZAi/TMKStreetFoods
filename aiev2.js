 // Function to detect if DevTools is open
        function detectDevTools() {
            const devtools = /./;                          
            devtools.toString = function() {
                // Alert only when DevTools is genuinely opened
                alert("DevTools is open!");
                window.location.href = "about:blank"; // Redirect to a blank page
            };

            // Check for DevTools every second
            setInterval(function() {
                console.log(devtools);
            }, 1000);
        }

        // Prevent F12 and Ctrl+Shift+I
        document.addEventListener("keydown", function(event) {
            if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
                event.preventDefault();
                alert("DevTools is disabled!");
            }
        });

        // Disable right-click context menu
        document.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            document.getElementById("overlay").style.display = "block";
        });

        // Start the DevTools detection
        detectDevTools();