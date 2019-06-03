function showClock(hours, minutes, seconds) {
	var secondsOutput = '';
	var minutesOutput = '';
	var hoursOutputLine1 = 'SSSS';
	var hoursOutputLine2 = 'SSSS';
	var isOddSecond = seconds % 2 === 1;

	for (var i = 0; i <= seconds; i++) {
		if (isOddSecond) {
			secondsOutput += i % 2 === 1 ? 'I' : '';
		} else {
			secondsOutput += i % 2 === 1 ? '' : 'P';
		}
	}

	for (var i = 0; i <= Math.floor(hours / 5); i++) {
		hoursOutputLine1 = hoursOutputLine1
			.split('')
			.splice(i, 1, 'A')
			.join();
	}

	if (hours > 20) {
		for (var i = 0; i <= hours - 20; i++) {
			hoursOutputLine2 = hoursOutputLine2
				.split('')
				.splice(i, 1, 'A')
				.join();
		}
	}

	console.log(isOddSecond ? 'S' : 'A');
	console.log(hoursOutputLine1);
	console.log(hoursOutputLine2);

	console.log(secondsOutput);
}

showClock(21, 0, 21);
script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js";

$('[id^=h]').addClass('off');
$('[id^=m]').addClass('off');

if (fiveMinutes > 0) {
	for (var i = 1; i <= fiveMinutes; i++) {
		if (i % 3 == 0) {
			$('#m5-' + i).removeClass('off');
		} else {
			$('#m5-' + i).removeClass('off');
		}
	}
}
if (singleMinutes > 0) {
	for (var i = 1; i <= singleMinutes; i++) {
		$('#m1-' + i).removeClass('off');
	}
}
