function solution(n) {
    let answer = 0;
    let count = 0;

    while (count < n) {
        answer++;

        if (answer % 3 !== 0 && !String(answer).includes('3')) {
            count++;
        }
    }

    return answer;
}