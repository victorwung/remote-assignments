function twoSum(nums, target) {
  let hashTable = {};
  // create hash table
  for (var i = 0; i < nums.length; i++) {
    var element = nums[i]; // get element
    hashTable[element] = i; // add each element and its index as key, value pairs
  }
  // check if result after minus in hash table
  for (var i = 0; i < nums.length; i++) {
    // console.log('minus element: ', target - nums[i]);
    if ((target - nums[i]) in hashTable) {
      // console.log('index:', hashTable[target-nums[i]]);
      if (hashTable[target-nums[i]] !== i) {
        return [i, hashTable[target-nums[i]]]; // return elements indices
      }
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/