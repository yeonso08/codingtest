function solution(numbers, k) {
    var answer = 0;
    
    if((k - 1)*2 >= numbers.length) {
        answer = numbers[(k - 1)*2 % numbers.length]
    } else {
                answer = numbers[(k - 1)*2]
    }
    

    
    return answer;
}