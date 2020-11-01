setInterval (function() {
    var time = moment();
    $("#currentDay").text(time.format("dddd MMMM Do"));
}, 1000);