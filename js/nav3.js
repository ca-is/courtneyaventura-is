function openNav() {
    const overlay = document.getElementById("navOverlay");
    overlay.classList.add("open");  // Add the 'open' class to show the overlay
    $('#footer').css('display', 'none');  // Hide footer if necessary
}

function closeNav() {
    const overlay = document.getElementById("navOverlay");
    overlay.classList.remove("open");  // Remove the 'open' class to hide the overlay
    
    // Optional: if you need to hide it after transition ends, use setTimeout
    setTimeout(function() {
        overlay.style.visibility = 'hidden';  // Hide after the transition
    }, 500);  // Match the transition duration in CSS
    $('#footer').css('display', 'block');  // Show footer when closing
}