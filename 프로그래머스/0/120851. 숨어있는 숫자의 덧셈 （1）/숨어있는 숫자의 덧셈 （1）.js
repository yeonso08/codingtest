function solution(my_string) {
    var answer = 0;
    for(let i = 0; my_string.length > i; ++i) {
        if(/[0-9]/.test(my_string[i])) {
            answer = answer + +my_string[i]
        }
    }
    return answer;
}