// TIME & DATE
function setDate() {
  var currentDate = moment();
  $("#currentDay").text(currentDate.format("MMM Do, YYYY"));
}

// var storageInput = document.querySelector("");
// var text = document.querySelector(".t1, .t2");
// var button = document.querySelector("button");

var buttonParent = document.querySelector(".container");

// RENDER TEXT IF TEXT IS SUBMITTED

// WHEN TEXT IS SUBMITTED SAVE TO LOCAL STORAGE
// storageInput.addEventListener("input", (letter) => {
//   text.textContent = letter.target.value;
// });

// const saveToLocalStorage = () => {
//   localStorage.setItem("9:00AM", text.textContent);
//   localStorage.setItem("10:00AM", text.textContent);
//   localStorage.setItem("11:00AM", text.textContent);
//   localStorage.setItem("12:00AM", text.textContent);
//   localStorage.setItem("1:00PM", text.textContent);
//   localStorage.setItem("2:00PM", text.textContent);
//   localStorage.setItem("3:00PM", text.textContent);
//   localStorage.setItem("4:00PM", text.textContent);
//   localStorage.setItem("5:00PM", text.textContent);
// };

// WHEN BUTTON IS CLICKED SAVE TO LOCALSTORAGE
// button.addEventListener("click", saveToLocalStorage);
buttonParent.addEventListener("click", function (event) {
  localStorage.setItem(
    event.path[1].children[0].innerText,
    event.target.previousElementSibling.value
  );
  console.log(event.path[1].children[0].innerText);
  console.log(event.target.previousElementSibling.value);
});

// RENDER DATE TO JUMBOTRON
function init() {
  setDate();
}
init();
