var time = moment();
var compareTime = moment().format("hA");
var apptTime = document.getElementById("hour").textContent;
console.log (compareTime);
console.log (apptTime);

setInterval (function() {
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);


function saveAppointment() {
    var formInput = document.getElementById("apptInput").value ;
    localStorage.setItem("apptInput", formInput);
    alert("Appointment saved!") ;
    console.log(formInput);
}

// if value in the hour class is > = < current hour
if (compareTime == apptTime) {
    var textClass = $("apptInput");
    document.getElementById("apptInput").classList.add("present");
} else if (compareTime > apptTime) {
    var textClass = $("apptInput");
    document.getElementById("apptInput").classList.add("past");
} else if (compareTime < apptTime) {
    var textClass = $("apptInput");
    document.getElementById("apptInput").classList.add("future");
}