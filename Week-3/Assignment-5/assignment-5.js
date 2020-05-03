//My solution
//Using For Loop -> O(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
    //Result Not Found
    return false;
}

//Better solution from internet
//Using Map -> O(n)
function twoSumByHash(nums, target) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++){
        //find the difference's key-value pair in map
        const index = numsMap.get(target - nums[i]);
        if (index !== undefined && index !== i) {
            return [index, i];
        } else {
            //can't find target -> store {num[i]:i} in the map
            numsMap.set(nums[i], i);
        }
    }
    //Result Not Found
    return false;
}

//console.log(twoSum([2, 7, 11, 15, -4], 11));
//console.log(twoSumByHash([2, 7, 11, 15, -4], 11));


console.log(twoSum([-1, -5, -4, -7, 10], -9));
console.log(twoSumByHash([-1, -5, -4, -7, 10], -9));

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/

const {performance} = require('perf_hooks');
function testArray(length) {
    return arr = Array.from({length: length}, () => Math.floor(Math.random() * length));
}

function functionTimeRecord(testArr, target, testFunction) {
    //node.js performance class
    console.log(testFunction);
    let startTime = performance.now();
    console.log(testFunction(testArr, testArr[target[0]]+testArr[target[1]]));
    let endTime = performance.now();
    let duration = endTime - startTime;
    console.log("duration: " + duration + "ms");
}

function twoSumTest(testArr = null, length=0, target) {
    if (testArr === null) {
        testArr = testArray(length);
    }
    console.log("Test Array Length: " + testArr.length);
    console.log("Target: [" + target + "]");
    functionTimeRecord(testArr, target, twoSum);
    functionTimeRecord(testArr, target, twoSumByHash);
    console.log("============================")
}

// twoSumTest([2, 7, 11, 15], 0, [0, 1]);
// twoSumTest([2, 7, 11, 15], 0, [0, 2]);
// twoSumTest([2, 7, 11, 15], 0, [0, 3]);

// twoSumTest([2, 7, 11, 15], 0, [1, 2]);
// twoSumTest([2, 7, 11, 15], 0, [1, 3]);

// twoSumTest([2, 7, 11, 15], 0, [2, 3]);

// twoSumTest(null, 3000, [0, 2999]);
// twoSumTest(null, 3000, [2998, 2999]);
// twoSumTest(null, 30000, [0, 29999]);
// twoSumTest(null, 300000, [0, 299999]);
// twoSumTest(null, 3000000, [0, 2999999]);