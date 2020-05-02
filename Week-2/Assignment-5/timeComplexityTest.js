const {performance} = require('perf_hooks');

function findPosition(numbers, target) {
    for (let i = 0; i < numbers.length; i++) { 
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}

function binarySearchPosition(numbers, target) {
    if (numbers.length === 0) { return -1;}
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        if (numbers[midIndex] === target) {
            return midIndex;
        } else if (numbers[midIndex] < target) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }
    }
    return -1;
} 

function testArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++){
        arr.push(i);
    }
    return arr;
}

function functionTimeRecord(testArr, target, testFunction) {
    //node.js performance class
    console.log(testFunction);
    let startTime = performance.now();
    testFunction(testArr, target);
    let endTime = performance.now();
    let duration = endTime - startTime;
    console.log("performance.now: " + duration + "ms");

    //console.time
    console.time('console.time');
    testFunction(testArr, target);
    console.timeEnd('console.time');

}

function binarySearchTest(length, target) {
    console.log("Test Array Length: " + length);
    console.log("Target: " + target);
    const arr = testArray(length);
    functionTimeRecord(arr, target, findPosition);
    functionTimeRecord(arr, target, binarySearchPosition);
    console.log("============================")
}

//binarySearchTest(10000000, 5000000);
//binarySearchTest(10000000, 10000001);
//binarySearchTest(10000000, -1);

// binarySearchTest(Math.pow(2,20), 262144);
// binarySearchTest(Math.pow(2, 26), Math.pow(2, 13));
// binarySearchTest(Math.pow(2, 26), Math.pow(2, 26));
// binarySearchTest(Math.pow(2,26), -1);