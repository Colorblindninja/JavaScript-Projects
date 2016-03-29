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

var EVENTS = [];

var OFFSET = 0;

function daysInMonth(year,month) {
    return new Date(year, month+1, 0).getDate();
}

var setUp = function() {
    var date = new Date();
    $("#next").click(function() {
        OFFSET += 1;
        console.log(OFFSET);
    });
    $("#prev").click(function() {
        OFFSET -= 1;
    });
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
        .css("height", 95/Math.ceil(daysInMonth(date.getFullYear(), date.getMonth())/7) + "%");
        //.css("position", "relative");
        week.css("top", (5+(Number(week.css("height").slice(0,-1)))*i) + "%");
        console.log(week.css('top'));
        if (i %2 == 0) {
            week.css("background-color", "lightgrey");
        }
        $("#calendarContainer").append(week);
    }
    //Make the days
    for (var i = 0; i<daysInMonth(date.getFullYear(), date.getMonth())+date.getDay(); i++) {
        var day = $('<div class="day"/>')
        .css("width",100/7+"%")
        .css("height", 95/Math.ceil(daysInMonth(date.getFullYear(), date.getMonth())/7) + "%")
        .css("position", "absolute")
        .css("left",100/7*(i%7)+"%")
        .click(function() {
            addEvent(new Date(date.getFullYear(),date.getMonth(),Number($(this).attr('id').slice(3)),0,0,0,0))
        });
        day.css("top", (5+(Number(day.css("height").slice(0,-1))*Math.floor(i/7))) + "%");
        if (i<date.getDay()){
            $("#week"+Math.floor(i/7)).append(day);
        } else {
            day.attr({
                id: "day"+(i+1-date.getDay())
            })
            .text(i+1-date.getDay())
            $("#week"+Math.floor(i/7)).append(day);
        }

    }
}

var addEvent = function(date) {
    $("#day"+date.getDate())
    .append(
        $('<input type="text", id="newEvent"/>')
        .css("width","100%"));
    $('#newEvent').keyup(function (e) {
        if (e.keyCode == 13) {
            makeEvent($('#newEvent').val(),date);
            $('#newEvent').remove();

        }
    })
    .click(function (thing){
        thing.stopPropagation();
    });
}

var makeEvent = function(name, date) {
    newEvent = {
        "name": name,
        "date": date
    };
    EVENTS.push(newEvent);
    console.log(newEvent);
    // var event = $('<div class="event"/>')
    // .text(newEvent.name);
    $('.eventContainer').append($('<div class="event"/>')
    .text(newEvent.name));
    $("#day"+date.getDate()).append($('<div class="event"/>')
    .text(newEvent.name));
}

setUp();
});
