const collaplisibleButton = document.getElementsByClassName("collapsible");

for (let i = 0; i < collaplisibleButton.length; i++) {
  collaplisibleButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.classList.toggle("hidden");
    content.classList.toggle("visible");
    // if (content.style.display === "flex") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "flex";
    // }
  });
} 