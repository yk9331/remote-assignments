//My solution
//Using For Loop -> O(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i]+ nums[j] === target) {
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
    return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSumByHash([2, 7, 11, 15], 9));


/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
