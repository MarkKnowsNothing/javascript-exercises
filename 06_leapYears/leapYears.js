const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    
    // is basically the same as:
    /**
    if (year % 4 === 0 && year % 100 != 0) {
        return true
    } else
    if (year % 400 === 0) {
        return true
    } else
    if (year % 400 != 0) {
        return false
    } else {
        return false
    }
    **/
};

// Do not edit below this line
module.exports = leapYears;
