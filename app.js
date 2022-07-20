// Time and Date
var date = moment();
$("#currentDay").text(date.format("MMM Do, YYYY"));

// Button Saves Information
var savedMsg = document.getElementById("text-input-box");
var saveButton = document.getElementById("save");

function saveLastMsg() {
  // Save related form data as an object

  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("savedMsg", JSON.stringify(savedMsg));
}

function renderLastMsg() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastComment = JSON.parse(localStorage.getItem("input"));
  // Check if data is returned, if not exit out of the function
  if (lastComment !== null) {
    document.getElementById("msg").innerHTML = lastComment.comment;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveLastMsg();
  renderLastMsg();
  console.log("saved");
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastMsg();
}
init();
