$("#currentDate").append(moment().format("dddd, MMM Do YYYY"));
console.log(currentDate);
var currentHour = moment().format("HH");
var currentDay = document.querySelector("#currentDay");
var scheduleContainer = document.getElementById("schedule-container");

var timeArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (let i = 0; i <= timeArr.length - 1; i++) {
  //generate html row
  var row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = `<div class="col-2" id="hour">${timeArr[i]}:00</div>
  <textarea class="col-8 ${
    currentHour > timeArr[i]
      ? "past"
      : currentHour == timeArr[i]
      ? "present"
      : "future"
  }" placeholder="ToDo" data-hour=${timeArr[i]}>${
    localStorage.getItem(timeArr[i]) ? localStorage.getItem(timeArr[i]) : ""
  }</textarea>
  <i class="col-2 saveBtn fas fa-save fa-2x"></i>
 `;

  //append to schedule container
  scheduleContainer.append(row);
}
var saveBtnArr = document.querySelectorAll(".saveBtn");
//loop through save buttons and add event listener to each
for (let i = 0; i <= saveBtnArr.length - 1; i++) {
  saveBtnArr[i].addEventListener("click", function (event) {
    var userInput = event.target.parentNode.children[1].value;
    var userHour = event.target.parentNode.children[1].dataset.hour;
    localStorage.setItem(userHour, userInput);
  });
}
