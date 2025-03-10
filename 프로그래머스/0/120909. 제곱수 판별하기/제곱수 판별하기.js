function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    answer = sqrt === Math.floor(sqrt) ? 1 : 2;
    return answer;
}