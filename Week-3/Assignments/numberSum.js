function getNumberSum(number) {
    let finalSum = 0;
    for (var i = 1; i <= number; i++) {
        finalSum += i;
    }
    return finalSum;
}

module.exports.getNumberSum = getNumberSum;