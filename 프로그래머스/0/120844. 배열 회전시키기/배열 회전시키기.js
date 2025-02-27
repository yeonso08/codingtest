function solution(numbers, direction) {
    var answer = [];
    answer = [...numbers]

    if(direction === 'right') {
        answer.pop()
        answer.unshift(numbers[numbers.length - 1])
    } else {
        answer.shift()
        answer.push(numbers[0])
    }
    
    
    
    return answer;
}