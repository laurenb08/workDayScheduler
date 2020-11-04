var time = moment();

setInterval (function() {
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);


function saveAppointment() {
    var formInput = document.getElementById("apptInput").value ;
    localStorage.setItem("apptInput", formInput);
    alert("Appointment saved!") ;
    console.log(formInput);
}
