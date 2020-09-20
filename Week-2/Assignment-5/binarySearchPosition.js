function binarySearchPosition(numbers, target) {
    let target_index = -1; // default as -1
    let left = 0;
    let right = numbers.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2); // get the middle position
        // console.log("position:", middle, left, right);
        // console.log("value:", numbers[middle], numbers[left], numbers[right]);
        if (numbers[middle] == target) {
            target_index = middle;
            break;
        }
        else if (numbers[middle] > target) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return target_index; // return position of target in numbers
}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3