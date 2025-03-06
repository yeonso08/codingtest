function solution(order) {
    var answer = 0;
    let arr = String(order).split('')
    arr.map((item) => {
        if(item === '3' || item ===  '6' || item ===  '9') {
            ++answer
        }
    })
    
    return answer;
}