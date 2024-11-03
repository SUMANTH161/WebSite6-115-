// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu bar element
    const menuBar = document.getElementById('menu-bar');

    // Toggle the visibility of the navbar when the menu bar is clicked
    menuBar.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar.style.display === 'flex') {
            navbar.style.display = 'none'; // Hide the navbar
        } else {
            navbar.style.display = 'flex'; // Show the navbar
        }
    });
});