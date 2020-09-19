function count(input) {
    let countResult = {}; // init result object
    for (var i = 0; i < input.length; i++) {
        var cur_char = input[i]; // get current character
        if (countResult.hasOwnProperty(cur_char) === true) {
            countResult[cur_char] += 1; // accumulate character appearance // must use []
        }
        else {
            countResult[cur_char] = 1; // first add character into result object // must use []
        }
    }
    return countResult;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1));
// should print {'a':3, 'b':1, 'c':2, 'x':1}
    
function groupByKey(input) {
    let groupByResult = {}; // init result object
    for (var i = 0; i < input.length; i++) {
        var cur_key = input[i].key; // get current key
        var cur_value = input[i].value; // get current value
        if (groupByResult.hasOwnProperty(cur_key) === true) {
            groupByResult[cur_key] += cur_value; // accumulate value of current key
        }
        else {
            groupByResult[cur_key] = cur_value; // first add current key into result object and assign value
        }
    }
    return groupByResult;
}

let input2 = [
    {key: 'a', value: 3},
    {key: 'b', value: 1},
    {key: 'c', value: 2},
    {key: 'a', value: 3},
    {key: 'c', value: 5}
];
console.log(groupByKey(input2));
// should print {'a':6, 'b':1, 'c':7}