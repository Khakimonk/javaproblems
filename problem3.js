var isPrime = function (input) {
    for (var i = 2; i < input; i++) {
        if (input % i === 0 ) {
            return false;
        }
    }
    return true;
};

var maxPrime = function (input) {
    var i = input - 1;
    while (i > 1 && isPrime(i)) {
        i--;
    }
    return i;
};

var maxPrimeFactor = function (input) {
    var divisor = input - 1;
    
    while (divisor > 1) {
        if (input % divisor === 0 && isPrime(divisor)) {
            return divisor;
        }
        divisor--;
    }
    return input;
};

var num = 60085147;

console.log(maxPrimeFactor(num));