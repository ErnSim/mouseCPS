// Inital Values
let countOfClicks = 0;
let timeOfLastClick;
let startTime = new Date();
let repatIsIdle = true;

// Functions execute
document.getElementById('hit-area').addEventListener('click', addClick);
setInterval(calculateCPS, 250);
setInterval(isIdle, 250);

//////////////////////////////////////////////////////////////////////////

function addClick() {
	countOfClicks++;
	timeOfLastClick = new Date();

	//console.log(timeOfLastClick);
}

function calculateCPS() {
	// Obliczanie różnicy czasu
	let currentTime = new Date();
	let timeDifference = (currentTime - startTime) / 1000;

	// Wyliczenie CPS i wynik w postaci dwóch miejsc po przecinku
	let CPS = (countOfClicks / timeDifference).toFixed(2);

	// Wyświetlanie informacji
	document.getElementById('valueOfCPS').innerHTML = CPS;
	//console.log('time passed: ' + timeDifference + ' | CPS: ' + CPS);
}

function isIdle(){
	let currentTime = new Date();
	let timeDifference = (currentTime - timeOfLastClick) / 1000;

	if ((timeDifference > 1) && (repatIsIdle == true)) {
		console.log('wyzerowano')
		repatIsIdle = false;
		// wyzeruj countOfClicks, ustaw nowy startTime	
	}
}