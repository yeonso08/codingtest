function solution(n) {
    var answer = [];
     for(let i = 1; Math.sqrt(n) >= i; ++i) {
         if(n%i === 0) {
             answer.push(i)
             answer.push(n/i)
         }
     }
    
    answer = [...new Set(answer)].sort(function(a, b) {
        return a - b;
    });
    
    return answer
}