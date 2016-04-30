"use strict";

//add a hint box

var fourWayStop = function() {

    $('.sim').empty();
    $('.quizContainer').empty();

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
        .css('left', '200px')
        .css('background', 'blue');
    var rightCar = $('<div class="horizontalCar"/>')
        .css('top', '412px')
        .css('left', '650px')
        .css('background', 'white');

    $('.sim').append(horizontalRoad).append(verticalRoad).append(mainCar).append(topCar).append(leftCar).append(rightCar);

    //Randomize the first car to go

    mainCar.animate({
        top: "-=150px",
    }, 1500 );
    topCar.animate({
        top: "+=150px",
    }, 2000 );
    leftCar.animate({
        left: "+=150px",
    }, 1700 );
    rightCar.animate({
        left: "-=150px",
    }, 1000 );

    $('.quizContainer').html('If all the cars are going straight through, who has the right of way here?')
    .append($('<li><button type="button" class="question" id="question1">The Blue Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question2">The Black Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question3">The White Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question4">The Red Car</button></li>'))
    .append($('<li><button type="button" class="replay" id="replay">Replay the Animation</button></li>'));

    $('#question3').click(function() {
        alert('Correct!');
        return false;
    });

    $('#question1').click(function(){
        alert('That was wrong please try again');
    });
    $('#question2').click(function(){
        alert('That was wrong please try again');
    });
    $('#question4').click(function(){
        alert('That was wrong please try again');
    });

    $('#replay').click(function(){
        fourWayStop();
    });

    //add a hint: "Which car pulls up first?"
}

var start = function() {
    $('.quizContainer').html("On the left you will be shown a series of animations, and on the right you will be prompted to answer a question about each animation.")
    .append($('<li><button type="button id="start">I\'m Ready!</button></li>').click(function() {
        fourWayStop();
    }));
}


$(document).ready(function() {


    $('.sim').append($('<div class = "mainCar"/>'));


    start();

});
