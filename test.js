// Write a promise that resolves after 1000 with value 1000
// Same for 2000 and 3000

aaa = new Promise(
    (resolve, reject) => {
        setTimeout(() => { resolve(1000); }, 2000)
    }
)
bbb = new Promise(
    (resolve, reject) => {
        setTimeout(() => { resolve(2000); }, 1000)
    }
)

// myRA gets: array of promises
// returns array of answers from each fromise
// actually returns a promise that resolves an array of answers...

const myRA = (arr) => {
    let count = 0;
    let retArr = [];

    return new Promise((ress) => {

        arr.forEach((element, idx) => {
            element.then(
                (res) => {
                    retArr[idx] = res;
                    count++;
                    console.log('debug', retArr, count, arr.length)
                    if (count === 2) { ress(retArr) }
                }
            )
        }
        );

    })


}
// if (count === arr.length) { return new Promise((resolve) => { resolve(retArr) }) }

myRA([aaa, bbb]).then(
    (res) => {
        console.log(res)
    }
)