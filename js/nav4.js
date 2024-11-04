function openNav() {
  document.getElementById("navOverlay").classList.add("open");
  $('#footer').css('display', 'none');
}

function closeNav() {
  document.getElementById("navOverlay").classList.remove("open");
  $('#footer').css('display', 'block');
}