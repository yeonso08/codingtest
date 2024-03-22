function solution(n, m) {
    let answer = [];
    let a = n, b = m;
    let tmp;

    // 최대공약수 구하기 (유클리드 호제법)
    while (b !== 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    // a는 이 시점에서 최대공약수

    // 최소공배수 구하기
    let lcm = (n * m) / a;

    answer.push(a, lcm); // 최대공약수와 최소공배수를 배열에 넣기

    return answer;
}
