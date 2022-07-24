// date
var currentDate = moment();
$("#currentDay").text(currentDate.format("MMM Do, YYYY"));

// global parent of entire timerow slots
var buttonParent = document.querySelector(".container");

// when button is clicked save to local storage
buttonParent.addEventListener("click", function (event) {
  localStorage.setItem(
    event.path[1].children[0].innerText,
    event.target.previousElementSibling.value
  );
  console.log(event.path[1].children[0].innerText);
  console.log(event.target.previousElementSibling.value);
});

// grab row class and submit value of that class (time)
document.querySelector("#s1").value = localStorage.getItem("9 AM");
document.querySelector("#s2").value = localStorage.getItem("10 AM");
document.querySelector("#s3").value = localStorage.getItem("11 AM");
document.querySelector("#s4").value = localStorage.getItem("12 AM");
document.querySelector("#s5").value = localStorage.getItem("1 PM");
document.querySelector("#s6").value = localStorage.getItem("2 PM");
document.querySelector("#s7").value = localStorage.getItem("3 PM");
document.querySelector("#s8").value = localStorage.getItem("4 PM");
document.querySelector("#s9").value = localStorage.getItem("5 PM");
