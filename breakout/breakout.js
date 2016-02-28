"use strict"
document.addEventListener("DOMContentLoaded", function(event) {
     var createBall = function () {
        ball.classList.add("ball");
        ball.id = "ball";
        ball.style.left = String(385);
        ball.style.top = String(300);
        this.appendChild(ball);
        console.log("roflcopter")
        ballGoing = true;
        this.removeEventListener("click", createBall);
    }
    
    var checkCollision = function (x,y) {
        var brickx = 80;  // dimensions of a brick
            var bricky = 20;
            var row = Math.floor((y - 100) / bricky);
            var col = Math.floor(x / brickx);
            if (!(row < 0 || row >= 10 || col < 0 || col >= 10)) {
                    // not in the right area
                if (!((x+2) % brickx < 4 || (y+2) % bricky < 4)){
                    // not quite in the brick--it's in the white border around a brick
                    // otherwise, row and column give the brick number
                    if (!document.getElementById("row"+String(row)+"col"+String(col)).classList.contains("broken")) {
                        document.getElementById("row"+String(row)+"col"+String(col)).classList.add("broken");
                        numBroken+=1;
                        if (numBroken >= 100) {
                            window.alert("YOU WON!");
                            window.clearInterval(intervalID);
                            document.location.reload();
                        }
                        return true;
                    }
                }
            }
    }
    
    var moveBall = function () {
        
        // ball velocity
        if (ballGoing) {
        
        var x = Number(ball.style.left.slice(0, -2));
        var y = Number(ball.style.top.slice(0, -2));
        var dx = vx+x;
        var dy = vy+y;
        if (dx < 0) {
                dx = 0;
                vx = -vx;
            }
        if (dx >  800-30) {
                dx =  800-30;
                vx = -vx;
            }
        if (dy < 0) {
                dy = 0;
                vy = -vy;
            }
        if (dy >  600-30) {
                // dy = 600-30;
                // vy = -vy;
                window.alert("YOU LOST!");
                window.clearInterval(intervalID);
                document.location.reload();
            } 
            
            
        // check for collisoions
            if (checkCollision(x,y)) {
                dx = x;
                dy = y;
                vy = Math.abs(vy);
            } else if (checkCollision(x+30, y)) {
                dx = x;
                dy = y;
                vy = Math.abs(vy);
            } else if (checkCollision(x, y+30)) {
                dx = x;
                dy = y;
                vy = -Math.abs(vy);
            } else if (checkCollision(x+30,y+30)) {
                dx = x;
                dy = y;
                vy = -Math.abs(vy);
            } else if (checkCollision(x,y+15)) {
                dx = x;
                dy = y;
                vx = Math.abs(vx);
            } else if (checkCollision(x+30,y+15)) {
                dx = x;
                dy = y;
                vx = -Math.abs(vx);
            }
            
        if (!(y < 530)) {
            if (!(y-30 > 550)) {
                if (!(x > (Number(paddle.style.left.slice(0, -2)))+140)) {
                    if (!(x+30 < (Number(paddle.style.left.slice(0, -2))))) {
                        vy = -Math.abs(vy);
                    }
                }
            }
        }
        
        
        ball.style.left = String(dx);
        ball.style.top = String(dy);
        

        }
        
    }
    var numBroken = 0;
    var paddle = document.createElement("div");
    var ballGoing = false;
    var ball = document.createElement("div");
    var bricks = [];
    var main = document.getElementById("main");
    main.addEventListener("click", createBall);
    var msPerFrame = 20;
    var secondsPerFrame = msPerFrame / 1000;

    // This sets horizontal rate to 200--600 pixels/second
    var vx = secondsPerFrame * (Math.floor(Math.random() * 400) + 200);
    if (Math.random() < 0.5) vx = -vx;

    // This sets verical rate to 500 pixels/second
    var vy = secondsPerFrame * 500 ;
    var intervalID = window.setInterval(moveBall, 20);
    
    
    var setUp = function() {
        var i, j;
        for (i=0; i<10; i++) {
            for (j=0; j<10; j++) {
                var brick = document.createElement("div");
                brick.classList.add("brick");
                brick.classList.add("row" + String(i));
                brick.classList.add("col" + String(j));
                brick.id = "row"+String(i)+"col"+String(j);
                bricks.push(brick);
                main.appendChild(brick);
            }
        }
        
        paddle.classList.add("paddle");
        paddle.id = "paddle";
        paddle.style.left = ((800 - 140) / 2).toString();
        main.appendChild(paddle);
        
        
        document.body.onmousemove = function (e) {
            var newx = (e.clientX - main.offsetLeft - 140/2);
            if (newx < 0) {
                newx = 0;
            }
            if (newx >  800-140) {
                newx =  800-140;
            }
            paddle.style.left = String(newx);
        }
    
   
        
        
    }
    setUp();

  });
