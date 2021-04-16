var currentTime = moment().format(`dddd, MMM Do YYYY`);
var currentHour = moment().format(`HH`);
var currentDay = document.querySelector(`#currentDay`);
var saveBtnArr = document.querySelectorAll(`.saveBtn`);
var scheduleContainer = document.getElementById("schedule-container");

var timeArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (let i = 0; i <= timeArr.length - 1; i++) {
  //generate html row
  var row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = `<div class="col-2" id="hour">${timeArr[i]}:00</div>
  <textarea class="col-8" placeholder="Event"></textarea>
  <button class="col-2 saveBtn">Save</button>`;

  //append to schedule container
  scheduleContainer.append(row);
}
// current time?

// localStorage for saved schedule items
console.log(currentHour);
currentDay.textContent = currentTime;

function saveFunction() {
  var whatIWantToSave = this.previousElementSibling.value;
  var referenceToTheValue = this.previousElementSibling.previousElementSibling
    .textContent;

  //   console.log(referenceToTheValue);
  localStorage.setItem(referenceToTheValue, whatIWantToSave);
}

for (i = 0; i < saveBtnArr.length; i++) {
  saveBtnArr[i].addEventListener("click", saveFunction);
}
