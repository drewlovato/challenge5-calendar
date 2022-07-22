// TIME & DATE
function setDate() {
  var currentDate = moment();
  $("#currentDay").text(currentDate.format("MMM Do, YYYY"));
}

var storageInput = document.querySelector("#storage");
var text = document.querySelector(".text");
var button = document.querySelector(".button");
var storedInput = localStorage.getItem("9:00");

// RENDER TEXT IF TEXT IS SUBMITTED
if (true) {
  text.value = storedInput;
}

// WHEN TEXT IS SUBMITTED SAVE TO LOCAL STORAGE
storageInput.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
  localStorage.setItem("9:00", text.textContent);
};

// WHEN BUTTON IS CLICKED SAVE TO LOCALSTORAGE
button.addEventListener("click", saveToLocalStorage);

// RENDER DATE TO JUMBOTRON
function init() {
  setDate();
}
init();
