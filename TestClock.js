function showClock(hours, minutes, seconds) {
	var secondsOutput = '';
	var minutesOutputLine1 = '';
	var minutesOutputLine2 = '';
	var hoursOutputLine1 = '';
	var hoursOutputLine2 = '';
	var isOddSecond = seconds % 2 === 1;

	var fiveHoursLightsOn = Math.floor(hours / 5);
	var oneHourLightsOn = hours % 5;

	var fiveMinutesLightsOn = Math.floor(minutes / 5);
	var oneMinuteLightsOn = minutes % 5;

	for (var i = 0; i <= seconds; i++) {
		if (isOddSecond && i % 2 === 1) {
			secondsOutput += 'I';
		} else if (!isOddSecond && i % 2 === 0) {
			secondsOutput += 'P';
		}
	}

	for (var i = 0; i < 4; i++) {
		if (fiveHoursLightsOn > 0) {
			hoursOutputLine1 += 'A';
		} else {
			hoursOutputLine1 += 'S';
		}

		fiveHoursLightsOn--;
	}

	for (var i = 0; i < 4; i++) {
		if (oneHourLightsOn > 0) {
			hoursOutputLine2 += 'A';
		} else {
			hoursOutputLine2 += 'S';
		}

		oneHourLightsOn--;
	}

	for (var i = 0; i < 11; i++) {
		if (fiveMinutesLightsOn > 0) {
			minutesOutputLine1 += 'B';
		} else {
			minutesOutputLine1 += 'C';
		}

		fiveMinutesLightsOn--;
	}

	for (var i = 0; i < 4; i++) {
		if (oneMinuteLightsOn > 0) {
			minutesOutputLine2 += 'B';
		} else {
			minutesOutputLine2 += 'C';
		}

		oneMinuteLightsOn--;
	}

	console.log(isOddSecond ? 'S' : 'A');
	console.log(hoursOutputLine1);
	console.log(hoursOutputLine2);
	console.log(minutesOutputLine1);
	console.log(minutesOutputLine2);

	console.log(secondsOutput);
}

showClock(21, 21, 21);
