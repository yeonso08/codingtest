function solution(n) {
    var answer = 0;
    let arr = String(n).split('');
    arr.map(item => {
        answer = answer + +item
    })
    return answer;
}