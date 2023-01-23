const sumAll = function(inputOne, inputTwo) {
    if (inputOne < 0 || inputTwo < 0) return "ERROR"
    // check if whether or not one of the inputs are negative numbers
    if (typeof inputOne != "number" || typeof inputTwo != "number") return "ERROR";
    // checking whether or not one of the inputs is invalid (i.e. string, array)

    if (inputOne > inputTwo) {
        let tempVar = inputOne;
        inputOne = inputTwo;
        inputTwo = tempVar;
    }; // swap 2 variables if the first input is greater the the second one
    
    let sum = inputOne;
    let newInput = inputOne; // assign 2 initial variables for the start of the sum loop

    for (; inputOne < inputTwo; inputOne++) {
        newInput++;
        sum += newInput;
    }; // continuously summing until inputOne is less than inputTwo by 1

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
