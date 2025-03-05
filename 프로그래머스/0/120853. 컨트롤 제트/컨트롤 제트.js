function solution(s) {
    var answer = 0;
    let arr = s.split(' ')
    for(let i = 0; arr.length > i; ++i) {
        if(arr[i] === 'Z') {
            answer = answer - +arr[i - 1]
        } else {
            answer = answer + +arr[i]
        }
    }
    return answer;
}