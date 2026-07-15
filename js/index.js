const expandBtn = document.getElementById("expand-button");
let isExpanded = false;

expandBtn.addEventListener("click", () => {
  isExpanded = !isExpanded;

  if (isExpanded) {
    document.getElementById("notification").innerHTML =
      '<i class="fa-regular fa-bell me-2"></i> Notifications';
    document.getElementById("message").innerHTML =
      '<i class="fa-regular fa-message me-2"></i> Messages';
  } else {
    document.getElementById("notification").innerHTML =
      '<i class="fa-regular fa-bell"></i>';
    document.getElementById("message").innerHTML =
      '<i class="fa-regular fa-message"></i>';
  }
});
