var solution1 = function(limit){
    var sum = 0;
    var sequence = [];
    sequence.push(1);
    sequence.push(2);
    sequence.push(3);
    var length = sequence.length;
    
    while(sequence[length-1] <= limit){    // generate Fibonacci sequence
        sequence.push(sequence[length-1] + sequence[length-2]);
        length = sequence.length;	// update variable storing array size
    }

    // last number in the sequence will be too large, so the for loop will
    // only run from element 0 to element length-2 instead of length-1
    for(var i = 0; i <= length-2; i++){
        if(sequence[i] % 2 === 0){
            sum += sequence[i];
        }
    }
    return sum;
};

var num = 4000000;

var start = new Date().getTime();
console.log('Answer 1: ' + solution1(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end - start) + 'ms');