function solution(n) {
    var answer = 0;
    
    for(let i = 1; Math.sqrt(n) > i; ++i) {
        if(n % i === 0) {
            ++answer
        }
    }
    
    if(Math.sqrt(n) % 1 === 0) {
       answer = answer*2 + 1
       } else {
           answer = answer*2
       }
    
    return answer;
}