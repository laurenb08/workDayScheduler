var time = moment();
// var compareTime = moment().format("hA");
// var apptTime = $("#hour").val();
// console.log(compareTime);
// console.log(apptTime);

setInterval(function () {
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);


function saveAppointment() {
    var textarea9 = document.getElementById("textarea9").value;
    localStorage.setItem("textarea9", textarea9);
    alert("Appointment saved!");
    console.log(localStorage);
}

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

loadAppointment();

function loadAppointment() {
    var nineBtn = localStorage.getItem("nineBtn");
    document.getElementById("textarea9").value = nineBtn;
    // var tenBtn = localStorage.getItem("tenBtn");
    // document.getElementById("textarea10").value = tenBtn;
    // var elevenBtn = localStorage.getItem("elevenBtn");
    // document.getElementById("textarea11").value = elevenBtn;
    // var twelveBtn = localStorage.getItem("twelveBtn");
    // document.getElementById("textarea12").value = twelveBtn;
    // var thirteenBtn = localStorage.getItem("thirteenBtn");
    // document.getElementById("textarea13").value = thirteenBtn;
    // var fourteenBtn = localStorage.getItem("fourteenBtn");
    // document.getElementById("textarea14").value = fourteenBtn;
    // var fifteenBtn = localStorage.getItem("fifteenBtn");
    // document.getElementById("textarea15").value = fifteenBtn;
    // var sixteenBtn = localStorage.getItem("sixteenBtn");
    // document.getElementById("textarea16").value = sixteenBtn;
    // var seventeenBtn = localStorage.getItem("seventeenBtn");
    // document.getElementById("textarea17").value = seventeenBtn;
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