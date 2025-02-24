function solution(numbers) {
    var sum = numbers.reduce((acc, cur) => acc + cur, 0);
    
    var answer = sum / numbers.length;
    
    return answer;
}