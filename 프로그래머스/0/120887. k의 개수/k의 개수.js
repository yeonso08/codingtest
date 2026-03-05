function solution(i, j, k) {
    let answer = 0;

    for (let start = i; start <= j; start++) {
        let str = start.toString();
        answer += str.length - str.replaceAll(k.toString(), '').length;
    }

    return answer;
}