// Come up with a way (infrastructure) to stop ALL setTimeouts that are currently running on you application
// it should work also on setTimeouts that other developers placed in the code and you dont even know about! 

// Part 1 of the answer:
_G = [];

(() => {
	let timeoutRef = setTimeout;
	setTimeout = (callback, timeout) => {
		let retVal = timeoutRef(callback, timeout);
		_G.push(retVal);
		return retVal;
	};
}
)();

// This code is given:
console.log(1);
setTimeout(() => { console.log(1000) }, 1000);
console.log(2);
setTimeout(() => { console.log(2000) }, 2000);
setTimeout(() => { console.log(3000) }, 3000);
setTimeout(() => { console.log(4000) }, 4000);
setTimeout(() => { console.log(5000) }, 5000);

// Part 2 of the answer - the code that stops all the setTimeouts out there: 
// Try commenting-out the code below and you will see that all the time-outs above are canceled
_G.forEach(element => {
	clearTimeout(element);
});