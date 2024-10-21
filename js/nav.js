// navOverlay
function openNav() {
    document.getElementById("navOverlay").style.width = "100%";
    $('#footer').css('display', 'none'); // Hide footer if necessary
}
function closeNav() {
    document.getElementById("navOverlay").style.width = "0%";
    $('#footer').css('display', 'block'); // Show footer when closing overlay
}