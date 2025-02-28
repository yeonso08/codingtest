function solution(n) {
    var answer = 0;
    let factors = 0;
    
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                factors++
                break;
            } 
        }
    }
    
    answer = factors
    
    return answer;
}