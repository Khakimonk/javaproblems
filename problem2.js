var solution1 = function(limit){
    var sum = 0;
    var sequence = [];
    sequence.push(1);
    sequence.push(2);
    sequence.push(3);
    var length = sequence.length;
    
    while(sequence[length-1] <= limit){ 
        sequence.push(sequence[length-1] + sequence[length-2]);
        length = sequence.length;
    }

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