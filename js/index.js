const btnToggle = document.querySelector("#btn-toggle");
const body = document.querySelector("body");
const text = document.querySelector("#text");

btnToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  if (body.classList.contains("dark-mode")) {
    text.textContent = "ON";
  } else {
    text.textContent = "OFF";
  }
});
