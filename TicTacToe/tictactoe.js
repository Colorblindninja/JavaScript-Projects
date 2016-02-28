var who = 1; // who's turn it is, 1=X -1=O
var turns = 0;
var clicked = [];
var getSquare = function (x,y) {
	return document.getElementById('square' + x + y);
}

var checkWins = function () {
	console.log(clicked);
	if (clicked[0] && clicked[0] === clicked[1] && clicked[0] === clicked[2]) {
		alert(clicked[0]+ " WINS!");
		return true;
	}
	if (clicked[3] && clicked[3] === clicked[4] && clicked[3] === clicked[5]) {
		alert(clicked[3]+ " WINS!");
		return true;
	}
	if (clicked[6] && clicked[6] === clicked[7] && clicked[6] === clicked[8]) {
		alert(clicked[6]+ " WINS!");
		return true;
	}
	if (clicked[0] && clicked[0] === clicked[3] && clicked[0] === clicked[6]) {
		alert(clicked[0]+ " WINS!");
		return true;
	}
	if (clicked[1] && clicked[1] === clicked[4] && clicked[1] === clicked[7]) {
		alert(clicked[1]+ " WINS!");
		return true;
	}
	if (clicked[2] && clicked[2] === clicked[5] && clicked[2] === clicked[8]) {
		alert(clicked[2]+ " WINS!");
		return true;
	}
	if (clicked[0] && clicked[0] === clicked[4] && clicked[0] === clicked[8]) {
		alert(clicked[0]+ " WINS!");
		return true;
	}
	if (clicked[2] && clicked[2] === clicked[4] && clicked[2] === clicked[6]) {
		alert(clicked[2]+ " WINS!");
		return true;
	}
}

var i;
var j;
var clickHandler = function () {
	// making the X and O show and switching turns
	if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
		if (who === 1) {
			this.innerHTML = 'X';
			who *= -1;
			turns+=1;
		}
		else if (who === -1) {
			this.innerHTML = 'O';
			who *= -1;
			turns+=1;
		}
	}

	//checking for wins

	var i;
	var j;
	var count = 0;
	for (i=0; i<3; i++) {
		for (j=0; j<3; j++) {
			if (getSquare(i, j).innerHTML === "&nbsp;") {
				clicked[count] = undefined;
			}
			else {
				clicked[count] = getSquare(i, j).innerHTML;
			}
			count++;
	}
}
	checkWins();
	if (turns >=9) {
		alert("It was a Tie!");
		return;
	}

}
for (i=0; i<3; i++) {
	for (j=0; j<3; j++) {
		getSquare(i, j).onclick = clickHandler;
	}
}