function solution(chicken) {
    var answer = 0;
    var first = chicken;
    
    while(first / 10 >= 1) {
        answer += Math.floor(first / 10)
        first = Math.floor(first / 10) + first % 10
          }
    
    return answer;
}