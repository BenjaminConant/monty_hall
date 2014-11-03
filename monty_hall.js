function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


var montyHallNeverSwitch = function() {
	var i = 0;
	var win = 0;
	var loss = 0;
	var array = [];
	var randomPick = 0;
	while (i <= 999) {
		randomPick = Math.floor(Math.random() * (3 - 0) + 0);
		array = ['g','g','car'];
		if (array[randomPick] === 'car') {
			win++;
		} else {
			loss++;
		}
		i++;	
	}

	console.log("Never Switch percentage wins = " + win/1000);
	console.log("Never Switch percentage loss = " + loss/1000);
}

var montyHallAlwaysSwitch = function() {
	var i = 0;
	var win = 0;
	var loss = 0;
	var array = [];
	var randomPick = 0;
	while (i <= 999) {
		/// choose random number
		randomPick = Math.floor(Math.random() * (3 - 0) + 0);
		/// this is the array
		array = ['g','g','car'];
		/// delete the users choice from the array
		array.splice(randomPick, 1);
		// cut out a goat
		array.splice(array.indexOf('g'),1);
		/// if what we are left with is a car we win
		if (array[0] === 'car') {
			win++;
		} else {
			loss++;
		}
		i++;	
	}

	console.log("Always Switch percentage wins = " + win/1000);
	console.log("Always Switch percentage loss = " + loss/1000);
}



montyHallNeverSwitch();
montyHallAlwaysSwitch();