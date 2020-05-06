//Callback
function delayedResult(n1, n2, delayTime, callback) {
    const result = n1 + n2;
    setTimeout(callback, delayTime, result);
}

//Promise
function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = n1 + n2;
            if (isNaN(result)) {
                reject("Not number")
            } else {
                resolve(result);
            }
                
        }, delayTime);
    });
}

delayedResultPromise(4, 5, 3000).then(console.log).catch(console.log);
delayedResultPromise(4, 'a', 4000).then(console.log).catch(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

//Async/Await
async function main() {
    console.log(await delayedResultPromise(-5, 10, 2000));
}
main() // result will be shown in the console after <delayTime> seconds