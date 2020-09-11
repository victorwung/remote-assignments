function countAandB(input) {
	var cnt_a = 0;
	var cnt_b = 0;
	for (var i = 0; i < input.length; i++) {
		if (input[i] === "a") {
		  cnt_a += 1;
		} else if (input[i] === "b") {
		  cnt_b += 1;
		} else {
		  // pass
		}
	}
	console.log(cnt_a + cnt_b); // total cnt of a or b in input array
}

function toNumber(input) {
	searchArray = ["a", "b", "c", "d", "e"];
	resultArray = [];
	for (var i = 0; i < input.length; i++) {
	  resultArray.push(searchArray.indexOf(input[i])+1); // get array index then plus 1
	}
	console.log(resultArray);
}

// example 1
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // print 4
console.log(toNumber(input1)); // print [1, 2, 3, 1, 3, 1, 3]

// example 2
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // print 0
console.log(toNumber(input2)); // print [5, 4, 3, 4, 5]