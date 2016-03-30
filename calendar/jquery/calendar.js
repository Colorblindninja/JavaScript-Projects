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

var DATE = new Date();

function daysInMonth(year,month) {
    return new Date(year, month+1, 0).getDate();
}

var setUp = function() {
    $("#next").click(function() {
        OFFSET += 1;
        console.log(OFFSET);
    });
    $("#prev").click(function() {
        OFFSET -= 1;
    });
    $(".date").text(MONTHS[DATE.getMonth()] + " " + DATE.getFullYear());
    updateCalendar(DATE);
}

var updateCalendar = function(date) {
    //Make the Weeks
    $('.calendarContainer').empty();
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
    for (var i = 0; i<daysInMonth(date.getFullYear(), date.getMonth())+date.getDay()-1; i++) {
        var day = $('<div class="day"/>')
        .css("width",100/7+"%")
        .css("height", 95/Math.ceil(daysInMonth(date.getFullYear(), date.getMonth())/7) + "%")
        .css("position", "absolute")
        .css("left",100/7*(i%7)+"%")
        .click(function() {
            addEvent(new Date(date.getFullYear(),date.getMonth(),Number($(this).attr('id').slice(3)),0,0,0,0))
        });
        day.css("top", (5+(Number(day.css("height").slice(0,-1))*Math.floor(i/7))) + "%");
        if (i<date.getDay()-1){
            $("#week"+Math.floor(i/7)).append(day);
        } else {
            day.attr({
                id: "day"+(i+1-date.getDay()+1)
            })
            .text(i+1-date.getDay()+1)
            $("#week"+Math.floor(i/7)).append(day);
        }

    }
}

var addEvent = function(date) {
    //Put in the input box
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
    EVENTS.sort(function(a,b){
        if (a.date.getTime()<b.date.getTime()){
            return -1;
        }
        if (a.date.getTime()>b.date.getTime()){
            return 1;
        }
        if (a.date.getTime()==b.date.getTime()){
            return 0;
        }
    });
    // console.log(newEvent);
    // var event = $('<div class="event"/>')
    // .text(newEvent.name);
    updateEventContainer();
    updateDayEvents();
    }
var updateEventContainer = function() {
    //Remake the event view
    $(".eventContainer").empty();
    var lastdate = 0
    console.log(EVENTS);
    for (var i=0;i<EVENTS.length;i++){
        if (EVENTS[i].date.getTime() > lastdate){
            lastdate = EVENTS[i].date.getTime();
            $('.eventContainer').append(
                $('<div class="eventDate"/>').text(EVENTS[i].date.toString().slice(0,15))
            )
        }
        $('.eventContainer').append(
            $('<div class="event" id="'+EVENTS[i].name+'"/>').text(EVENTS[i].name));
    }
}

var updateDayEvents = function() {
    $('.day').remove($('.event'));
    for (var i=0;i<EVENTS.length;i++){
        if (EVENTS[i].date.getFullYear() == DATE.getFullYear() && EVENTS[i].date.getMonth() == DATE.getMonth()) {
            $("#day"+EVENTS[i].date.getDate()).append(
                $('<div class="event"/>').text(EVENTS[i].name));
        }
    }

}

setUp();
});
