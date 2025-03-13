function solution(my_string) {
    var answer = 0;
    let arr = []
    let arr2 = []
    arr = my_string.split('')
    arr.map((item, index) => {
        if(!isNaN(item)) {
            arr2.push(item)
        } else {
            answer = answer + +arr2.join('')
            arr2 = []
        }
    })
        if (arr2.length > 0) {
        answer = answer + +arr2.join('')
    }
    
    return answer;
}