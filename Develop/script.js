var time = moment();

//displays current date at top of schedule
setInterval(function () {
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);

//Functions for storing appointment info when user clicks the save button
function saveAppointmentNine() {
    var nineBtn = document.getElementById("textarea9").value;
    localStorage.setItem("nineBtn", nineBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentTen() {
    var tenBtn = document.getElementById("textarea10").value;
    localStorage.setItem("tenBtn", tenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentEleven() {
    var elevenBtn = document.getElementById("textarea11").value;
    localStorage.setItem("elevenBtn", elevenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentTwelve() {
    var twelveBtn = document.getElementById("textarea12").value;
    localStorage.setItem("twelveBtn", twelveBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentThirteen() {
    var thirteenBtn = document.getElementById("textarea13").value;
    localStorage.setItem("thirteenBtn", thirteenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentFourteen() {
    var fourteenBtn = document.getElementById("textarea14").value;
    localStorage.setItem("fourteenBtn", fourteenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentFifteen() {
    var fifteenBtn = document.getElementById("textarea15").value;
    localStorage.setItem("fifteenBtn", fifteenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentSixteen() {
    var sixteenBtn = document.getElementById("textarea16").value;
    localStorage.setItem("sixteenBtn", sixteenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

function saveAppointmentSeventeen() {
    var seventeenBtn = document.getElementById("textarea17").value;
    localStorage.setItem("seventeenBtn", seventeenBtn);
    alert("Appointment saved!");
    console.log(localStorage);
}

loadAppointment();

//function for recalling local storage when page is reloaded
function loadAppointment() {
    var nineBtn = localStorage.getItem("nineBtn");
    document.getElementById("textarea9").value = nineBtn;
    var tenBtn = localStorage.getItem("tenBtn");
    document.getElementById("textarea10").value = tenBtn;
    var elevenBtn = localStorage.getItem("elevenBtn");
    document.getElementById("textarea11").value = elevenBtn;
    var twelveBtn = localStorage.getItem("twelveBtn");
    document.getElementById("textarea12").value = twelveBtn;
    var thirteenBtn = localStorage.getItem("thirteenBtn");
    document.getElementById("textarea13").value = thirteenBtn;
    var fourteenBtn = localStorage.getItem("fourteenBtn");
    document.getElementById("textarea14").value = fourteenBtn;
    var fifteenBtn = localStorage.getItem("fifteenBtn");
    document.getElementById("textarea15").value = fifteenBtn;
    var sixteenBtn = localStorage.getItem("sixteenBtn");
    document.getElementById("textarea16").value = sixteenBtn;
    var seventeenBtn = localStorage.getItem("seventeenBtn");
    document.getElementById("textarea17").value = seventeenBtn;
}

//loops over appointment times to help determine if the appointment is in the past, present, or future
var present = new Date().getHours();

for (i = 9; i < 17; i++) {
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
console.log(present);