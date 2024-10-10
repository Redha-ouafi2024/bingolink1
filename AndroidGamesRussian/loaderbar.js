    // JavaScript to update the progress bar
                function updateProgressBar() {
                        const progressBar = document.getElementById("myBar");
                        let progress = 0;
                        const interval = setInterval(() => {
                                if (progress >= 100) {
                                        clearInterval(interval);
                    window.location.href = "index+1.html";
                                } else {
                                        progress += 1;
                                        progressBar.style.width = progress + "%";
                                        progressBar.innerHTML = progress + "%";
                                }
                        }, 50); // Adjust the interval as needed
                }
                // Call the function to start the progress
                updateProgressBar();