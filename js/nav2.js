function openNav() {
    const overlay = document.getElementById("navOverlay");
    overlay.style.width = "100%";
    overlay.style.visibility = "visible";
    $('#footer').css('display', 'none'); // Hide footer if necessary
}

function closeNav() {
    const overlay = document.getElementById("navOverlay");
    overlay.style.width = "0%";
    overlay.style.visibility = "hidden";
    $('#footer').css('display', 'block'); // Show footer when closing overlay
}

