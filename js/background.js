// background with parallax effect
document.addEventListener("mousemove", function (event) {
  const background = document.querySelector(".background");
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const percentX = (mouseX / windowWidth) * 0.7;
  const percentY = (mouseY / windowHeight) * 0.7;
  background.style.transform = `translate(-${percentX}%, -${percentY}%)`;
});
