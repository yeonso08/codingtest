function solution(cipher, code) {
    var answer = '';
    for(let i = 1; Math.floor(cipher.length / code) >= i; ++i) {
        answer += cipher[code*i - 1]
    }
    return answer;
}