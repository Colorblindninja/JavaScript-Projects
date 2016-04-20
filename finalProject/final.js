"use strict";

var fourWayStop = function() {

    var horizontalRoad = $('<div class="horizontalRoad"/>')
        .css('top', '400px')
        .css('left', '200px')
        .css('width', '500px');

    var verticalRoad = $('<div class="verticalRoad"/>')
        .css('top', '200px')
        .css('left', '400px')
        .css('height', '500px');

    var mainCar = $('<div class="verticalMainCar"/>')
        .css('top', '650px')
        .css('left', '462px');


    var topCar = $('<div class="verticalCar"/>')
        .css('top', '200px')
        .css('left', '412px');

    var leftCar = $('<div class="horizontalCar"/>')
        .css('top', '462px')
        .css('left', '200px');

    var rightCar = $('<div class="horizontalCar"/>')
        .css('top', '412px')
        .css('left', '650px');

    $('.sim').append(horizontalRoad).append(verticalRoad).append(mainCar).append(topCar).append(leftCar).append(rightCar);

    mainCar.animate({
        top: "-=150px",
    }, 1000 );
    topCar.animate({
        top: "+=150px",
    }, 1000 );
    leftCar.animate({
        left: "+=150px",
    }, 1000 );
    rightCar.animate({
        left: "-=150px",
    }, 1000 );

}



$(document).ready(function() {

    $('.quizContainer').hide();

    $('.sim').append($('<div class = "mainCar"/>'));

    
    fourWayStop()

});
