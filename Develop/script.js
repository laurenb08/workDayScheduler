var time = moment();
var compareTime = moment().format("hA");
var apptTime = $("#hour").text();
console.log (compareTime);
console.log (apptTime);

setInterval (function() {
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);


function saveAppointment() {
    var formInput = document.getElementById("apptInput").value;
    localStorage.setItem("apptInput", formInput);
    alert("Appointment saved!") ;
    console.log(formInput);
}

// if value in the hour class is > = < current hour
if (compareTime.textContent == apptTime.textContent) {
    // var textClass = $("apptInput").textContent;
    $("#apptInput").addClass("present");
} else if (compareTime.textContent >= apptTime.textContent) {
    // var textClass = $("apptInput").textContent;
    $("#apptInput").addClass("past");
} else if (compareTime.textContent <= apptTime.textContent) {
    // var textClass = $("apptInput").textContent;
    $("#apptInput").addClass("future");
}
