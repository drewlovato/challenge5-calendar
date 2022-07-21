// TIME & DATE
function setDate() {
  var currentDate = moment();
  $("#currentDay").text(currentDate.format("MMM Do, YYYY"));
}

var storageInput = document.querySelector("#storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const storedInput = localStorage.getItem("textinput");

if (storageInput) {
  text.textContent = storedInput;
}

storageInput.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
  localStorage.setItem("textinput", text.textContent);
};

button.addEventListener("click", saveToLocalStorage);

// The init() function fires when the page is loaded
function init() {
  setDate();
}
init();
