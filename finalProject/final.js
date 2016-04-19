"use strict";

var fourWayStop = function() {

    var horizontalRoad = $('<div class="horizontalRoad"/>')
        .css('top', '400px')
        .css('left', '200px')
        .css('width', '500px');

    var verticalRoad = $('<div class="verticalRoad"/>')
        .css('top', '100px')
        .css('left', '400px')
        .css('height', '500px');

    $('.sim').append(horizontalRoad).append(verticalRoad);
    return;

}



$(document).ready(function() {

    $('.quizContainer').hide();

    $('.sim').append($('<div class = "mainCar"/>'));
    fourWayStop();

});
