// Inital Values
let countOfClicks = 0;
let maxCPS = 0;
let timeOfLastClick;
let startTime = new Date();

// Functions execute
document.getElementById('hit-area').addEventListener('click', addClick);
setInterval(calculateCPS, 100);
setInterval(isIdle, 100);

//////////////////////////////////////////////////////////////////////////

function addClick() {
	countOfClicks++;
	timeOfLastClick = new Date();
}

function calculateCPS() {
	// Calculate CPS value
	let currentTime = new Date();
	let timeDifference = (currentTime - startTime) / 1000;
	let CPS = (countOfClicks / timeDifference).toFixed(2);

	// Set new max CPS value
	if (CPS > maxCPS) 
	{
		maxCPS = CPS;
	}

	// Display results
	document.getElementById('valueOfCPS').innerHTML = CPS;
	document.getElementById('valueOfMaxCPS').innerHTML = maxCPS;
	console.log('time passed: ' + timeDifference + ' | CPS: ' + CPS + ' | max CPS: ' + maxCPS);
}

function isIdle(){
	let currentTime = new Date();
	let timeDifference = (currentTime - timeOfLastClick) / 1000;

	if (timeDifference > 1) {		// If idle more than 1 sec, then reset CPS value
		countOfClicks = 0;
		startTime = new Date();
	}
}