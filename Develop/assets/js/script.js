var currentTime = moment().format("dddd, MMM Do YYYY");
var currentHour = moment().format("HH");
var currentDay = document.querySelector("#currentDay");
var scheduleContainer = document.getElementById("schedule-container");

var timeArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (let i = 0; i <= timeArr.length - 1; i++) {
  //generate html row
  var row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = `<div class="col-2" id="hour">${timeArr[i]}:00</div>
  <textarea class="col-8" placeholder="Event" data-hour=${timeArr[i]}>${
    localStorage.getItem(timeArr[i]) ? localStorage.getItem(timeArr[i]) : ''
  }</textarea>
  <button class="col-2 saveBtn">Save</button>`;

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

// current time?

// localStorage for saved schedule items
