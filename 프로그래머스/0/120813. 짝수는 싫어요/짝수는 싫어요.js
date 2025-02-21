function solution(n) {
    var answer = [];
    
    for(let i = 1; n >= i; ++i) {
        if(i % 2 !== 0) {
            answer.push(i)
        }
    }
    
   answer.sort(function(a,b) {
        return a - b;
    })
    
    return answer;
}