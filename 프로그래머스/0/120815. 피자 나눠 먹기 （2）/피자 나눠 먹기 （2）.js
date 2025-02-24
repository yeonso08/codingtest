function solution(n) {
    var answer = 0;
    if(6 % n === 0) {
        answer = 1
    } else {
        for(let i = 2; n >= i; ++i) {
        if ((6 * i) % n === 0) {
                answer = i
                                break;
            } 
        }
    }
    return answer;
}