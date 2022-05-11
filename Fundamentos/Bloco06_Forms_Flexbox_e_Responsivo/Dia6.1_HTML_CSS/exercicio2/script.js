const inputText = document.querySelector("#input-text");
const inputCheckBox = document.querySelector("#input-checkbox");
const linkA = document.querySelector("#href");

linkA.addEventListener("click", function (event) {
  event.preventDefault();
});

inputCheckBox.addEventListener("click", function (event) {
  event.preventDefault();
});

inputText.addEventListener("keypress", function (event) {
  if (event.key != "a") {
    event.preventDefault();
  }
});
