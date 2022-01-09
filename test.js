aaa = new Promise(
    (res, rej) => {
        let a = 5;
        if (a === 3) res('3');
        else rej(5);
    }


)

aaa.then((x) => console.log(x))
    .catch((x) => console.log(x, 'bad'))