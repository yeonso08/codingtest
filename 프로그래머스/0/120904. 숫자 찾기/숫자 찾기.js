function solution(num, k) {
    let answer = String(num).split('').indexOf(String(k))
    if(answer == -1) {
        return -1
    } else {
        return answer + 1
    }
}