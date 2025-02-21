function solution(array) {
    var answer = 0;
    let count = 1;
    let max = 0;
    
    
    if(array.length === 1) {
        answer = array[0]
    } else{
    for(let i = 0; array.length - 2 >= i; ++i) {
        for(let j = i + 1; array.length - 1 >= j; ++j) {
            if(array[i] === array[j]) {
                ++count
            }
        }
        if(max < count) {
            max = count
            answer = array[i];
        } else if(max === count) {
            answer = -1;
        }
         count = 1;

    }
        } 
    
    return answer;
}