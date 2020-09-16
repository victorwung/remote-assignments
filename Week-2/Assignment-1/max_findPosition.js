function max(numbers) {
    let cur_max = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > cur_max) {
            cur_max = numbers[i]; // if larger than cur_max, update cur_max
        }
        else {
            // pass
        }
    }
    return cur_max;
}

function findPosition(numbers, target) {
    let target_index = -1; // default as -1
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            target_index = i; // if match target return the array index
            break;
        }
        else {
            // pass
        }
    }
    return target_index;
}

console.log( max([1, 2, 4, 5]) ); // should print 5
console.log( max([5, 2, 7, 1, 6]) ); // should print 7
console.log( findPosition([5, 2, 7, 1, 6], 5) ); // should print 0
console.log( findPosition([5, 2, 7, 1, 6], 7) ); // should print 2
console.log( findPosition([5, 2, 7, 7, 7, 1, 6], 7) ); // should print 2 (the first position)
console.log( findPosition([5, 2, 7, 1, 6], 8) ); // should print -1