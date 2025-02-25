function solution(n, k) {
    var answer = 0;
    let sale = Math.floor(n / 10)
    answer = 12000*n + (k - sale) * 2000
    return answer;
}