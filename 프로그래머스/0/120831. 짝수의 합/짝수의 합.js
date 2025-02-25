function solution(n) {
    var answer = 0;
    for(let i = 1; n >= i; ++i) {
        if(i % 2 === 0) {
            answer += i
        }
    }
    return answer;
}