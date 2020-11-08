var time = moment();
var compareTime = moment().format("hA");
var apptTime = $("#hour").val();
console.log(compareTime);
console.log(apptTime);

setInterval(function () {
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);


function saveAppointment() {
    var formInput = document.getElementById("apptInput").value;
    localStorage.setItem("apptInput", formInput);
    alert("Appointment saved!");
    console.log(formInput);
} loadAppointment();

// if value in the hour class is > = < current hour
// if (compareTime.textContent == apptTime.textContent) {
// var textClass = $("apptInput").textContent;
// $("#apptInput").addClass("present");
// } else if (compareTime.textContent >= apptTime.textContent) {
// var textClass = $("apptInput").textContent;
//     $("#apptInput").addClass("past");
// } else if (compareTime.textContent <= apptTime.textContent) {
// var textClass = $("apptInput").textContent;
//     $("#apptInput").addClass("future");
// }

// For 9AM

function loadAppointment() {
    var nineBtn = localStorage.getItem("nineBtn");
    document.getElementById("nineBtn").value = nineBtn;
}

var present = new Date().getHours();

for (i = 9; i < 18; i++) {
    if (present > i) {
        $("#textarea" + i).addClass("past");
    }
    else if (present == i) {
        $("#textarea" + i).addClass("present");
    }
    else if (present < i) {
        $("#textarea" + i).addClass("future");
    }
};