const myDelay = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(time), time);
	});
}

const myResolveAll = (promiseArray) => {
	let returnedArr = [];
	let count = 0;
	return new Promise((resolve) => {

		promiseArray.forEach((element, idx) => {
			element.then((res) => {
				returnedArr[idx] = res;
				count++;
				if (count == 3) { resolve(returnedArr) }
			})
		});
	})
}

myResolveAll([myDelay(1000), myDelay(200), myDelay(100)]).then((res) => {
	console.log(res);
})
