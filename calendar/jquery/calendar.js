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



var DATE = new Date();
var DATE = new Date(DATE.getFullYear(), DATE.getMonth());
function daysInMonth(year,month) {
    return new Date(year, month+1, 0).getDate();
}

var setUp = function() {
    $("#next").click(function() {
        console.log("next");
        if (DATE.getMonth()==11) {
            DATE = new Date(DATE.getFullYear()+1,0);
        } else {
            DATE = new Date(DATE.getFullYear(),DATE.getMonth()+1);
        }
        console.log(DATE);
        updateCalendar(DATE);
        updateDayEvents();
        return false;
    });
    $("#prev").click(function() {
        console.log("prev");
        if (DATE.getMonth()==0) {
            DATE = new Date(DATE.getFullYear()-1,11);
        } else {
            DATE = new Date(DATE.getFullYear(),DATE.getMonth()-1);
        }
        console.log(DATE);
        updateCalendar(DATE);
        updateDayEvents();
        return false;
    });
    updateCalendar(DATE);
}

var updateCalendar = function(date) {
    console.log(date);
    $(".date").text(MONTHS[DATE.getMonth()] + " " + DATE.getFullYear());
    //Make the Weeks
    $('.calendarContainer').empty();
    for (var i=0;i<daysInMonth(date.getFullYear(), date.getMonth())/7;i++) {
        var week = $("<div/>")
        .attr({
            id: "week"+i
        })
        //add a gray background if its an even week
        .css("height", 95/Math.ceil(daysInMonth(date.getFullYear(), date.getMonth())/7) + "%");
        //USE MARGIN-TOP
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
    //Put in the input box
    $("#day"+date.getDate())
    .append(
        $('<input type="text", id="newEvent"/>')
        .css("width","100%"));
    $('#newEvent').keyup(function (e) {
        if (e.keyCode == 13) {
            makeEvent($('#newEvent').val(),date);
            $('#newEvent').remove();
            updateEventContainer();
            console.log("update day event is about to be called");
            updateDayEvents();

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
    }
var updateEventContainer = function() {
    //Remake the event view
    $(".eventContainer").empty();
    var lastdate = 0;
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
    // for (var i=1;i<daysInMonth(DATE.getFullYear(), DATE.getMonth());i++) {
    //     $('#day'+i).remove('.event');
    // }
    $('.day .event').remove();
    //console.log(EVENTS);
    for (var i=0;i<EVENTS.length;i++){
        //console.log(EVENTS[i].date.getMonth(),DATE.getFullYear(),DATE.getMonth());
        if (EVENTS[i].date.getFullYear() == DATE.getFullYear() && EVENTS[i].date.getMonth() == DATE.getMonth()) {
            console.log("Wait does this even happen?");
            var day = $("#day"+EVENTS[i].date.getDate());
            console.log("day object", day);
            day
            .append(
                $('<div class="event"/>').text(EVENTS[i].name));
        }
    }

}

setUp();
});
