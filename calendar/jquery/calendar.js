"use strict";

$(document).ready(function() {

var MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function daysInMonth(year,month) {
    return new Date(year, month+1, 0).getDate();
}

var setUp = function() {
    var date = new Date();

    $(".date").text(MONTHS[date.getMonth()] + " " + date.getFullYear());
    updateCalendar(date);
}

var updateCalendar = function(date) {
    //Make the Weeks
    for (var i=0;i<daysInMonth(date.getFullYear(), date.getMonth())/7;i++) {
        var week = $("<div/>")
        .attr({
            id: "week"+i
        })
        //add a gray background if its an even week
        .css("height", 100/Math.ceil(daysInMonth(date.getFullYear(), date.getMonth())/7) + "%");
        if (i %2 == 0) {
            week.css("background-color", "lightgrey");
        }
        $("#calendarContainer").append(week);
    }
    //Make the days
    for (var i = 0; i<daysInMonth(date.getFullYear(), date.getMonth()); i++) {
        var day = $('<div class="day"/>')
        .text(i+1)
        .css("width",100/7+"%")
        .css("height", 100/Math.ceil(daysInMonth(date.getFullYear(), date.getMonth())/7) + "%")
        .css("position", "absolute")
        .css("left",100/7*i+"%");


        console.log($("#week"+Math.floor(i/7)));
        $("#week"+Math.floor(i/7)).append(day);
    }
}

setUp();
});
