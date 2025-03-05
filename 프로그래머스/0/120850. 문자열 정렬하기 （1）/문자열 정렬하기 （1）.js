function solution(my_string) {
    var answer = [];
    for(let i = 0; my_string.length > i; ++i) {
        if(/[0-9]/.test(my_string[i])) {
            answer.push(+my_string[i])
        }
    }
    answer.sort(function(a, b) {
       return a -b
    })
    return answer;
}