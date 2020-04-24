function binarySearchPosition(numbers, target) {
    // Empty Array
    if (numbers.length === 0) { return -1;}

    let startIndex = 0;
    let endIndex = numbers.length - 1;
    
    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        
        if (numbers[midIndex] === target) {
            return midIndex;
        } else if (numbers[midIndex] < target) {
            startIndex = midIndex+1;
        } else {
            endIndex = midIndex-1;
        }
    }
    //Target Not Found
    return -1;
} 


console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0 
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3

console.log(binarySearchPosition([1, 2, 5, 6, 7], 3)); // should print -1
console.log(binarySearchPosition([], 3)); // should print -1