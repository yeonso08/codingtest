function solution(num_list, n) {
    var answer = [[]];
    
    for(let i = 0; num_list.length / n > i; ++i) {
        answer[i] = num_list.slice(i*n, i*n + n)
    }
    
    return answer;
}