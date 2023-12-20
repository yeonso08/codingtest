function solution(k, m, scores) {
    var answer = 0;
    scores.sort((a, b) => b - a);
    for (let i = 0; i <= scores.length - m; i += m) {
        let lowestScore = scores[i + m - 1];
        answer += lowestScore * m;
    }

    return answer;
}