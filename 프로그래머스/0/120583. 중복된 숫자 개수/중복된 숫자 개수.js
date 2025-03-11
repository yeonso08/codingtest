function solution(array, n) {
    var answer = 0;
    array.map(item => {
        item === n && ++answer;
    })
    return answer;
}