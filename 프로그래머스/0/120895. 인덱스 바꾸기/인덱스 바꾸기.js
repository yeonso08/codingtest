function solution(my_string, num1, num2) {
    var answer = '';
    answer = my_string.split('')
    let one = answer[num1]
    let two = answer[num2]
    answer[num1] = two
    answer[num2] = one
    
    return answer.join('');
}