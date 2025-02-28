function solution(n) {
    var answer = 0;
    let multipl = 1;
    
    for(let i = 1; n >= i; i++) {
        multipl = multipl * i
        if(multipl === n) {
            return answer = i;
        }
           if(multipl > n) {
            return answer = i - 1;
        }
    } 
    

    return answer;
}