function solution(M, N) {
    var answer = 0;
    let mul = M*N 
    if(mul > 1) {
        answer = mul - 1 
    }
    return answer;
}