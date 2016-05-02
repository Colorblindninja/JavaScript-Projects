"use strict";

//add a hint box

var fourWayStop = function() {

    var hint = "Which car pulled up to the stop first?";

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
        emergencyVehicle();
        return false;
    });

    $('#question1').click(function(){
        wrongAnswer(hint);
    });
    $('#question2').click(function(){
        wrongAnswer(hint);
    });
    $('#question4').click(function(){
        wrongAnswer(hint);
    });

    $('#replay').click(function(){
        fourWayStop();
    });

    //add a hint: "Which car pulls up first?"
}

var merge = function() {

}

var leftTurn = function() {

    var hint = "Which car is in the median, stopped?";

    $('.sim').empty();
    $('.quizContainer').empty();

    var horizontalRoad = $('<div class="twoLaneHorizontalRoad"/>')
        .css('top', '337.5px')
        .css('left', '200px')
        .css('width', '600px');
    var verticalRoad = $('<div class="twoLaneVerticalRoad"/>')
        .css('top', '100px')
        .css('left', '437.5px')
        .css('height', '600px');

    var mainCar = $('<div class="verticalMainCar"/>')
        .css('top', '650px')
        .css('left', '487px');
    var bottomCar = $('<div class="verticalCar"/>')
        .css('top', '650px')
        .css('left', '513px');
    var topCar = $('<div class="verticalCar"/>')
        .css('top', '100px')
        .css('left', '462.5px')
        .css('background', 'blue');
    var rightCar = $('<div class="horizontalCar"/>')
        .css('top', '362.5px')
        .css('left', '750px')
        .css('background', 'white');

    $('.sim').append(horizontalRoad).append(verticalRoad).append(mainCar).append(topCar).append(bottomCar).append(rightCar);

    mainCar.animate({
        top: "-=187.5px",
    }, 1500 );
    bottomCar.animate({
        top: "-=550px",
    }, 2000 );
    topCar.animate({
        top: "+=550px",
    }, 1700 );
    rightCar.animate({
        left: "-=187.5px",
    }, 1000 );

    $('.quizContainer').html('Which car is moving into position to make a left hand turn??')
    .append($('<li><button type="button" class="question" id="question1">The Blue Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question2">The Black Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question3">The White Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question4">The Red Car</button></li>'))
    .append($('<li><button type="button" class="replay" id="replay">Replay the Animation</button></li>'));

    $('#question4').click(function() {
        alert('Correct!');
        passing();
        return false;
    });

    $('#question1').click(function(){
        wrongAnswer(hint);
    });
    $('#question2').click(function(){
        wrongAnswer(hint);
    });
    $('#question3').click(function(){
        wrongAnswer(hint);
    });

    $('#replay').click(function(){
        leftTurn();
    });
}

var blinker = function() {

}

var passing = function() {

    var hint = "What lines mean you can pass?";

    $('.sim').empty();
    $('.quizContainer').empty();

    var verticalRoad = $('<div class="verticalRoad"/>')
        .css('top', '100px')
        .css('left', '400px')
        .css('height', '600px');

    for (var i=0;i<12;i++) {
        var line1 = $('<div/>')
        .css('top', (110+(50*i)).toString()+'px')
        .css('left', '449px')
        .css('width','3px')
        .css('height','25px')
        .css('z-index', '101')
        .css('position', 'absolute')
        .css('background', 'white');
        $('.sim').append(line1);
    }

    var line = $('<div/>')
        .css('top', '500px')
        .css('left', '449px')
        .css('width','3px')
        .css('height','200px')
        .css('z-index', '101')
        .css('position', 'absolute')
        .css('background', 'yellow');
    $('.sim').append(line);

    var mainCar = $('<div class="verticalMainCar"/>')
        .css('top', '550px')
        .css('left', '462px');
    var otherCar = $('<div class="verticalCar"/>')
        .css('top', '650px')
        .css('left', '462px');

    $('.sim').append(verticalRoad).append(mainCar).append(otherCar);

    mainCar.animate({
        top: "-=200px",
    }, 1100 );
    otherCar.animate({
        top: "-=200px",
    }, 1000 );
    otherCar.animate({
        top: "-=150px",
        left: "-=50px"
    }, 800 );
    mainCar.animate({
        top: "-=100px",
    }, 1200 );
    otherCar.animate({
        top: "-=150px",
        left: "+=50px"
    }, 800 );
    mainCar.animate({
        top: "-=75px",
    }, 1000 );
    otherCar.animate({
        top: "-=50px",
    }, 500 );

    $('.quizContainer').html('Did the car do a correct pass?')
    .append($('<li><button type="button" class="question" id="question1">Yes</button></li>'))
    .append($('<li><button type="button" class="question" id="question2">No</button></li>'))
    .append($('<li><button type="button" class="replay" id="replay">Replay the Animation</button></li>'));

    $('#question1').click(function() {
        alert('Correct!');
        lanes();
        return false;
    });

    $('#question2').click(function(){
        wrongAnswer(hint);
    });


    $('#replay').click(function(){
        passing();
    });

}

var parkingHill = function() {

}

var emergencyVehicle = function() {

    var hint = "Emergency Vehicles need everyone to get out of their way.";

    $('.sim').empty();
    $('.quizContainer').empty();

    var verticalRoad = $('<div class="verticalRoad"/>')
        .css('top', '100px')
        .css('left', '400px')
        .css('height', '600px');

    var mainCar = $('<div class="verticalMainCar"/>')
        .css('top', '650px')
        .css('left', '462px');
    var topCar = $('<div class="verticalCar"/>')
        .css('top', '100px')
        .css('left', '412px')
        .css('background', 'white');
    var redLight = $('<div/>')
        .css('top', '125px')
        .css('left', '428px')
        .css('width','5px')
        .css('height','3px')
        .css('z-index', '101')
        .css('position', 'absolute')
        .css('background', 'red');
    var blueLight = $('<div/>')
        .css('top', '125px')
        .css('left', '417px')
        .css('width','5px')
        .css('height','3px')
        .css('z-index', '101')
        .css('position', 'absolute')
        .css('background', 'blue');


    $('.sim').append(verticalRoad).append(mainCar).append(topCar).append(redLight).append(blueLight);

    mainCar.animate({
        top: "-=550px",
    }, 1700 );
    redLight.animate({
        top: "+=550px",
    }, 1200 );
    topCar.animate({
        top: "+=550px",
    }, 1200 );
    blueLight.animate({
        top: "+=550px",
    }, 1200 );

    $('.quizContainer').html('What should the Red car do when an Emergency Vehicle is coming in this situation?')
    .append($('<li><button type="button" class="question" id="question1">Keep going</button></li>'))
    .append($('<li><button type="button" class="question" id="question2">Pull into the median and stop</button></li>'))
    .append($('<li><button type="button" class="question" id="question3">Stop where he is</button></li>'))
    .append($('<li><button type="button" class="question" id="question4">Speed up</button></li>'))
    .append($('<li><button type="button" class="replay" id="replay">Replay the Animation</button></li>'));

    $('#question2').click(function() {
        alert('Correct!');
        leftTurn();
        return false;
    });

    $('#question1').click(function(){
        wrongAnswer(hint);
    });
    $('#question3').click(function(){
        wrongAnswer(hint);
    });
    $('#question4').click(function(){
        wrongAnswer(hint);
    });

    $('#replay').click(function(){
        emergencyVehicle();
    });
}

var lanes = function() {

    var hint = "what is the left lane on a two lane highway typically called?";

    $('.sim').empty();
    $('.quizContainer').empty();

    var verticalRoad = $('<div class="verticalRoad"/>')
        .css('top', '100px')
        .css('left', '400px')
        .css('height', '600px');

    var verticalRoad2 = $('<div class="verticalRoad"/>')
        .css('top', '100px')
        .css('left', '200px')
        .css('height', '600px');

    var mainCar = $('<div class="verticalMainCar"/>')
        .css('top', '650px')
        .css('left', '462.5px');
    var bottomCar = $('<div class="verticalCar"/>')
        .css('top', '650px')
        .css('left', '412.5px');
    var topCar = $('<div class="verticalCar"/>')
        .css('top', '100px')
        .css('left', '262.5px')
        .css('background', 'blue');
    var topCar2 = $('<div class="verticalCar"/>')
        .css('top', '175px')
        .css('left', '262.5px')
        .css('background', 'white');

    $('.sim').append(verticalRoad).append(verticalRoad2).append(mainCar).append(topCar).append(topCar2).append(bottomCar);


    for (var i=0;i<12;i++) {
        var line1 = $('<div/>')
        .css('top', (110+(50*i)).toString()+'px')
        .css('left', '249px')
        .css('width','3px')
        .css('height','25px')
        .css('z-index', '101')
        .css('position', 'absolute')
        .css('background', 'white');

        var line2 = $('<div/>')
        .css('top', (110+(50*i)).toString()+'px')
        .css('left', '449px')
        .css('width','3px')
        .css('height','25px')
        .css('z-index', '101')
        .css('position', 'absolute')
        .css('background', 'white');

        $('.sim').append(line1).append(line2);

    }
    mainCar.animate({
        top: "-=550px",
    }, 1200 );
    bottomCar.animate({
        top: "-=550px",
    }, 1700 );
    topCar.animate({
        top: "+=475px",
    }, 1700 );
    topCar2.animate({
        top: "+=475px",
    }, 1700 );

    $('.quizContainer').html('Which car is in the wrong lane?')
    .append($('<li><button type="button" class="question" id="question1">The Blue Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question2">The Black Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question3">The White Car</button></li>'))
    .append($('<li><button type="button" class="question" id="question4">The Red Car</button></li>'))
    .append($('<li><button type="button" class="replay" id="replay">Replay the Animation</button></li>'));

    $('#question2').click(function() {
        alert('Correct!');
        return false;
    });

    $('#question1').click(function(){
        wrongAnswer(hint);
    });
    $('#question4').click(function(){
        wrongAnswer(hint);
    });
    $('#question3').click(function(){
        wrongAnswer(hint);
    });

    $('#replay').click(function(){
        lanes();
    });
}

var flashingYellow = function() {

}

var flashingRed = function() {

}

var fourWaySameTime = function() {

}

var wrongAnswer = function(hint) {
    alert("That was wrong, please read the hint and try again");
    $('.quizContainer').append("HINT:\n" + hint);
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
