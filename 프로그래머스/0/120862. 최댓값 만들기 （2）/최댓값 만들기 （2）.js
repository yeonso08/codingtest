function solution(numbers) {
    var answer = 0;
    let plus = 0;
    let minus = 0;
    
    numbers.sort(function(a, b) {
        return a - b
    })
    
    plus = numbers[numbers.length - 1] * numbers[numbers.length - 2]
    minus = numbers[0] * numbers[1]
    
    if(minus > plus) {
        return minus
    } else {
        return plus
    }
}